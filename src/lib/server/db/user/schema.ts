/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  pgTable,
  json,
  timestamp,
  time,
  text,
  integer,
  boolean,
  serial,
  // customType,
} from 'drizzle-orm/pg-core'
import { cityTable } from '$db/schema'
import { relations, sql } from 'drizzle-orm'
import { generateId } from '$lib/server/auth/sessions'

export const userRoleEnum = ['citzen', 'city_employee', 'admin'] as const
export type UserRole = (typeof userRoleEnum)[number]
export const userTable = pgTable('user', {
  id: text('id')
    .notNull()
    .primaryKey()
    .$defaultFn(() => generateId(15)),
  created_at: timestamp('created_at').notNull().defaultNow(),
  role: text('role', { enum: userRoleEnum }).default('citzen'),
  cityId: integer('city_id').references(() => cityTable.id),
  name: text('name'),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  phone: text('phone'),
  phoneVerified: boolean('phone_verified'),
  hasSubscription: boolean('has_subscription').default(false),
  password_hash: text('password_hash'),
  meta: json('meta').default({}),
})

export type SelectUser = typeof userTable.$inferSelect
export type InsertUser = typeof userTable.$inferInsert

// AUTH TABLES
export const sessionTable = pgTable('auth_session', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, {
      onDelete: 'cascade',
    }),
  expiresAt: timestamp('expires_at', {
    mode: 'date',
    withTimezone: true,
  }).notNull(),
})

export type SelectSession = typeof sessionTable.$inferSelect
export const userVerificationCodeTable = pgTable('auth_verification_code', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, {
      onDelete: 'cascade',
    }),
  email: text('email').notNull(),
  expiresAt: timestamp('expires_at', {
    mode: 'date',
    withTimezone: true,
  }).notNull(),
})

export const passwordResetCodeTable = pgTable('auth_password_reset_code', {
  token_hash: text('token_hash').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, {
      onDelete: 'cascade',
    }),
  expiresAt: timestamp('expires_at').notNull(),
})

export const magicLinkTable = pgTable('auth_magic_link', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, {
      onDelete: 'cascade',
    }),
  email: text('email').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
})
