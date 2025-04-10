/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  pgTable,
  pgEnum,
  json,
  timestamp,
  time,
  text,
  integer,
  boolean,
  serial,
  geometry,
  point,
  line,
  index,
  primaryKey,
  // customType,
} from 'drizzle-orm/pg-core'
import { relations, sql } from 'drizzle-orm'
import { dataSetTable } from '../datasets/schema'

export const mapTable = pgTable('map', {
  id: serial('id').notNull().primaryKey(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  created_by: text('created_by').notNull(),
  public: boolean('public').default(false),
  city_id: integer('city_id').references(() => cityTable.id),
  name: text('name'),
  center: geometry('center', {
    type: 'point',
    mode: 'xy',
    srid: 4326,
  }).notNull(), // #TODO: give default value
  zoom: integer('zoom').notNull(), // #TODO: give default value
})
export type InsertMap = typeof mapTable.$inferInsert
export type SelectMap = typeof mapTable.$inferSelect
export const mapLayerTable = pgTable(
  'map_layer',
  {
    map_id: integer('map_id')
      .notNull()
      .references(() => mapTable.id),
    layer_id: integer('layer_id')
      .notNull()
      .references(() => dataSetTable.id),
  },
  t => ({
    pk: primaryKey({
      columns: [t.map_id, t.layer_id],
    }),
  }),
)

//  -----------------------------

export const cityTable = pgTable('cities', {
  id: serial('id').notNull().primaryKey(),
  verified: boolean('verified').default(false),
  name: text('name').notNull(),
  country: text('country').notNull(),
  location: geometry('location', {
    type: 'point',
    mode: 'xy',
    srid: 4326,
  }),
  population: integer('population'),
  area: integer('area'),
  density: integer('density'),
})

export type InsertCity = typeof cityTable.$inferInsert
export type SelectCity = typeof cityTable.$inferSelect
