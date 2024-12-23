import { procedure, router } from '$trpc/t'

import { z } from 'zod'

import { userC as userController } from '$db/controller'
import { sessionsC } from '$lib/server/auth/sessions'

import { emailTemplate, sendMail } from '$lib/server/services/email'
import { setSessionTokenCookie } from '$lib/server/auth/cookies'

export const userRouter = router({
  resendEmailVerification: procedure.query(async ({ ctx }) => {
    const { locals } = ctx

    const localUser = locals.user

    if (!localUser) {
      return {
        message: 'Not authenticated',
      }
    }

    const verificationCode = await userController.verificationCode.generate(
      localUser.id,
      localUser.email,
    )
    await sendMail(
      localUser.email,
      emailTemplate.verificationCode(verificationCode),
    )

    return {
      message: 'Verification email sent',
    }
  }),
  verifyEmail: procedure
    .input(
      z.object({
        code: z.string().length(8),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { locals } = ctx
      const sessionId = locals.session?.id
      const { code } = input

      if (!sessionId) {
        return {
          error: 'Not authenticated',
          data: null,
        }
      }

      const { user } = await sessionsC.validateSessionToken(sessionId)
      if (!user) {
        return {
          error: 'Not authenticated',
          data: null,
        }
      }

      const validCode = await userController.verificationCode.verify(user, code)

      if (!validCode) {
        return {
          error: 'Invalid code',
          data: null,
        }
      }

      await sessionsC.invalidateUserSessions(user.id)
      await userController.update(user.id, {
        emailVerified: true,
      })

      const token = sessionsC.generateSessionToken()
      const session = await sessionsC.createSession(token, user.id)
      setSessionTokenCookie(ctx, token, session.expiresAt)

      return {
        data: {
          message: 'Email verified',
          success: true,
        },
        error: null,
      }
    }),
  resetPassword: procedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input, ctx }) => {
      const { email } = input
      const { url } = ctx

      // const user = await db.table('user').where('email', '=', email).get()
      const [{ id: userID }] = await userController.getByEmail(email)
      if (!userID) {
        // If you want to avoid disclosing valid emails,
        // this can be a normal 200 response.
        return {
          error: 'Invalid email',
          data: null,
        }
      }

      const verificationToken =
        await userController.passwordRecovery.createToken(userID)
      // const verificationLink =
      //   'http://localhost:3000/reset-password/' + verificationToken
      const verificationLink = `${url.origin}/reset-password/${verificationToken}`

      // await sendPasswordResetToken(email, verificationLink)
      await sendMail(email, emailTemplate.resetPassword(verificationLink))
      return {
        data: 'Password reset email sent, Check your email',
        error: null,
      }
    }),
})
