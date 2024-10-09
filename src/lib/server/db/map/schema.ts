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
  // customType,
} from 'drizzle-orm/pg-core'
import { relations, sql } from 'drizzle-orm'

export const dataSetTable = pgTable('dataset', {
  id: serial('id').notNull().primaryKey(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  created_by: text('created_by').notNull(),
  name: text('name'),
  type: text('type', { enum: ['lat_long', 'adress'] }).notNull(),
  meta: json('meta')
    .default({})
    .$type<{ latField: string; longField: string } | { adressField: string }>(),
  fields: text('fileds').array().notNull(),
  center: geometry('center').notNull(), // #TODO: give default value
  zoom: integer('zoom').notNull(), // #TODO: give default value
})

export const dataRowTable = pgTable('data_row', {
  id: serial('id').notNull().primaryKey(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  datasetId: integer('dataset_id')
    .notNull()
    .references(() => dataSetTable.id),
  data: json('data').notNull().$type<Record<string, unknown>>(),
  latLong: geometry('lat_long'),
})

export const dataChartsTable = pgTable('data_chart', {
  id: serial('id').notNull().primaryKey(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  datasetId: integer('dataset_id')
    .notNull()
    .references(() => dataSetTable.id),
  type: text('type', { enum: ['line', 'bar', 'pie'] }).notNull(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters: json('filters').notNull().$type<{ label: string; query: any }[]>(),
})
