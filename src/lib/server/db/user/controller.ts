import { eq } from 'drizzle-orm'
import { db } from '$db'
import {
  type InsertUser,
  userTable,
  userVerificationCodeTable,
  passwordResetCodeTable,
  magicLinkTable,
  // type UserPermissions,
  type SelectUser,
  sessionTable,
} from '../schema'

import { TimeSpan, createDate, isWithinExpirationDate } from 'oslo'
import { generateRandomString, alphabet, sha256 } from 'oslo/crypto'
import { encodeHex } from 'oslo/encoding'
// import { hash, verify } from '@node-rs/argon2'
import { hash, verify } from './password'

import { emailTemplate, sendMail } from '$lib/server/services/email'

import { generateId } from '$lib/server/auth/sessions'

export function isValidEmail(email: string): boolean {
  return /.+@.+/.test(email)
}
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const userC = {
  getPublicInfo: function () {
    return db
      .select({
        // id: userTable.id,
        // name: userTable.name,
        // username: userTable.username,
        // email: userTable.email,
        // phone: userTable.phone,
        // created_at: userTable.created_at,
        // role: userTable.role,
        // verified: userTable.emailVerified,
      })
      .from(userTable)
  },
  getByUsername: function (username: string) {
    return db
      .select()
      .from(userTable)
      .where(eq(userTable.username, username))
      .limit(1)
  },
  getByEmail: function (email: string) {
    return db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email))
      .limit(1)
  },
  getById: function (userId: string) {
    return db.select().from(userTable).where(eq(userTable.id, userId)).limit(1)
  },
  getSessions: function (userId: SelectUser['id']) {
    return db.select().from(sessionTable).where(eq(sessionTable.userId, userId))
  },
  create: function (user: InsertUser) {
    return db.insert(userTable).values(user)
  },
  update: function (userId: SelectUser['id'], user: Partial<SelectUser>) {
    return db.update(userTable).set(user).where(eq(userTable.id, userId))
  },
  verificationCode: {
    generate: async function (userId: string, email: string): Promise<string> {
      await db
        .delete(userVerificationCodeTable)
        .where(eq(userVerificationCodeTable.userId, userId))

      const code = generateRandomString(8, alphabet('0-9'))

      await db.insert(userVerificationCodeTable).values({
        userId,
        email,
        code,
        expiresAt: createDate(new TimeSpan(15, 'm')), // 15 minutes
      })
      return code
    },
    verify: async function (user: SelectUser, code: string): Promise<boolean> {
      const [databaseCode] = await db
        .select()
        .from(userVerificationCodeTable)
        .where(eq(userVerificationCodeTable.userId, user.id))
      if (!databaseCode || databaseCode.code !== code) {
        return false
      }

      await db
        .delete(userVerificationCodeTable)
        .where(eq(userVerificationCodeTable.id, databaseCode.id))

      if (!isWithinExpirationDate(databaseCode.expiresAt)) {
        return false
      }
      if (databaseCode.email !== user.email) {
        return false
      }
      return true
    },
  },
  passwordRecovery: {
    createToken: async function (userId: string): Promise<string> {
      await db
        .delete(passwordResetCodeTable)
        .where(eq(passwordResetCodeTable.userId, userId))

      const tokenId = generateId(40) // 40 character
      const tokenHash = encodeHex(
        await sha256(new TextEncoder().encode(tokenId)),
      )
      await db.insert(passwordResetCodeTable).values({
        token_hash: tokenHash,
        userId,
        expiresAt: createDate(new TimeSpan(2, 'h')),
      })
      return tokenId
    },
    getToken: function (token: string) {
      return db
        .select()
        .from(passwordResetCodeTable)
        .where(eq(passwordResetCodeTable.token_hash, token))
        .limit(1)
    },
    deleteToken: function (token: string) {
      return db
        .delete(passwordResetCodeTable)
        .where(eq(passwordResetCodeTable.token_hash, token))
    },
    alterPassword: async function (
      password: unknown,
      verificationToken: string,
    ) {
      if (
        typeof password !== 'string' ||
        password.length < 6 ||
        password.length > 255
      ) {
        return {
          error: {
            message: 'Invalid password',
          },
        }
      }

      const tokenHash = encodeHex(
        await sha256(new TextEncoder().encode(verificationToken)),
      )
      const [token] = await userC.passwordRecovery.getToken(tokenHash)

      if (token) {
        await userC.passwordRecovery.deleteToken(tokenHash)
      }

      if (!token || !isWithinExpirationDate(token.expiresAt)) {
        return {
          error: {
            message: 'Invalid or expired token',
          },
        }
      }

      const passwordHash = await hash(password)
      await userC.update(token.userId, {
        password_hash: passwordHash,
      })

      return {
        data: {
          message: 'Password updated',
          userId: token.userId,
        },
      }
    },
  },
  auth: {
    login: {
      magicLink: {
        send: async function ({ email, url }: { email: unknown; url: URL }) {
          if (
            typeof email !== 'string' ||
            email.length < 3 ||
            email.length > 255 ||
            !/.+@.+/.test(email)
          ) {
            return {
              error: {
                message: 'Invalid email',
              },
            }
          }

          let [existingUser] = await userC.getByEmail(email)

          if (!existingUser) {
            const { data, error } = await userC.auth.register.simple(email)

            if (error) {
              console.error(error)
              return {
                error: {
                  message: 'Failed to send magic link',
                },
              }
            }

            existingUser = data.user
          }

          try {
            const verificationToken = await createMagicLinkToken(
              existingUser.id,
              existingUser.email,
            )
            const verificationLink = `${url.origin}/login/${verificationToken}`
            await sendMail(email, emailTemplate.magicLink(verificationLink))
            return {
              data: {
                message: 'Magic link sent, Check your email',
              },
            }
          } catch (error) {
            console.error(error)
            return {
              error: {
                message: 'Failed to send magic link',
              },
            }
          }
        },
        validate: async function (verificationToken: string) {
          const [token] = await getMagicLinkToken(verificationToken)
          if (token) {
            await deleteMagicLinkToken(verificationToken)
          }

          if (!token || !isWithinExpirationDate(token.expiresAt)) {
            return {
              error: {
                message: 'Invalid or expired token',
              },
            }
          }
          const [userDB] = await userC.getById(token.userId)
          if (!userDB || userDB.email !== token.email) {
            return {
              error: {
                message: 'Invalid or expired token',
              },
            }
          }
          return {
            data: {
              user: userDB,
            },
          }
        },
      },
      password: async function (email: unknown, password: unknown) {
        if (
          typeof email !== 'string' ||
          email.length < 3 ||
          email.length > 255 ||
          !/.+@.+/.test(email)
        ) {
          return {
            error: {
              message: 'Invalid email',
            },
          }
        }

        if (
          typeof password !== 'string' ||
          password.length < 6 ||
          password.length > 255
        ) {
          return {
            error: {
              message: 'Invalid password',
            },
          }
        }
        const [existingUser] = await userC.getByEmail(email)
        if (!existingUser) {
          return {
            error: {
              message: 'Email not found',
            },
          }
        }
        if (!existingUser.password_hash) {
          return {
            error: {
              message:
                'No password set, try using magic link login or password recovery',
            },
          }
        }

        const validPassword = await verify(existingUser.password_hash, password)

        if (!validPassword) {
          return {
            error: {
              message: 'Incorrect password',
            },
          }
        }
        return {
          data: {
            user: existingUser,
          },
        }
      },
    },

    register: {
      withPassword: async function (
        username: unknown,
        email: unknown,
        password: unknown,
      ) {
        if (
          typeof username !== 'string' ||
          username.length < 3 ||
          username.length > 31 ||
          !/^[a-z0-9_-]+$/.test(username)
        ) {
          return {
            error: {
              message: 'Invalid username',
            },
          }
        } else {
          const [exists] = await userC.getByUsername(username)
          if (exists) {
            return {
              error: {
                message: 'Username already used',
              },
            }
          }
        }

        if (
          typeof email !== 'string' ||
          email.length < 3 ||
          email.length > 255 ||
          !isValidEmail(email)
        ) {
          return {
            error: {
              message: 'Invalid email',
            },
          }
        } else {
          const [exists] = await userC.getByEmail(email)
          if (exists) {
            return {
              error: {
                message: 'Email already used',
              },
            }
          }
        }

        if (
          typeof password !== 'string' ||
          password.length < 6 ||
          password.length > 255
        ) {
          return {
            error: {
              message: 'Invalid password',
            },
          }
        }

        const passwordHash = await hash(password)

        try {
          const [newUser] = await userC
            .create({
              username,
              email,
              emailVerified: false,
              password_hash: passwordHash,
            })
            .returning()

          return {
            data: {
              user: newUser,
            },
          }
        } catch (e) {
          // if (
          //   e instanceof PostgresError &&
          //   e.code === 'SQLITE_CONSTRAINT_UNIQUE'
          // ) {
          //   return {
          //     error: {
          //       message: 'Username or Email already used',
          //     },
          //   }
          // }
          console.error(e)
          return {
            error: {
              message: 'An unknown error occurred',
            },
          }
        }
      },
      simple: async function (email: unknown) {
        if (
          typeof email !== 'string' ||
          email.length < 3 ||
          email.length > 255 ||
          !isValidEmail(email)
        ) {
          return {
            error: {
              message: 'Invalid email',
            },
          }
        }
        try {
          const username = email.split('@')[0]
          const [newUser] = await userC
            .create({
              email,
              username,
              emailVerified: false,
            })
            .returning()

          return {
            data: {
              user: newUser,
            },
          }
        } catch (e) {
          // if (
          //   e instanceof PostgresError &&
          //   e.code === 'SQLITE_CONSTRAINT_UNIQUE'
          // ) {
          //   return {
          //     error: {
          //       message: 'Username already used',
          //     },
          //   }
          // }
          console.error(e)
          return {
            error: {
              message: 'An unknown error occurred',
            },
          }
        }
      },
    },
  },
}

async function createMagicLinkToken(
  userId: string,
  email: string,
): Promise<string> {
  await db.delete(magicLinkTable).where(eq(magicLinkTable.userId, userId))
  const tokenId = generateId(40) // 40 characters long
  await db.insert(magicLinkTable).values({
    id: tokenId,
    userId,
    email,
    expiresAt: createDate(new TimeSpan(2, 'h')),
  })
  return tokenId
}

async function getMagicLinkToken(token: string) {
  return db
    .select()
    .from(magicLinkTable)
    .where(eq(magicLinkTable.id, token))
    .limit(1)
}

async function deleteMagicLinkToken(token: string) {
  return db.delete(magicLinkTable).where(eq(magicLinkTable.id, token))
}
