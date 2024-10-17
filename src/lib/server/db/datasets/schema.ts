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
  // customType,
} from 'drizzle-orm/pg-core'
import { relations, sql } from 'drizzle-orm'
import { citiesTable } from '../map/schema'

export const dataSetTable = pgTable(
  'dataset',
  {
    id: serial('id').notNull().primaryKey(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    created_by: text('created_by').notNull(),
    city_id: integer('city_id').references(() => citiesTable.id),
    public: boolean('public').default(false),
    name: text('name'),
    disease: text('disease'),
    type: text('type', { enum: ['lat_long', 'address'] }).notNull(),
    meta: json('meta')
      .default({})
      .$type<
        { latField: string; longField: string } | { addressField: string }
      >(),
    fields: text('fileds').array().notNull(),
    center: geometry('center', {
      type: 'point',
      mode: 'xy',
      srid: 4326,
    }).notNull(), // #TODO: give default value
    zoom: integer('zoom').notNull(), // #TODO: give default value
  },
  t => ({
    disease_index: index('disease_index').on(t.disease),
  }),
)
export type SelectDataset = typeof dataSetTable.$inferSelect
export type InsertDataset = typeof dataSetTable.$inferInsert

export const dataRowTable = pgTable(
  'data_row',
  {
    id: serial('id').notNull().primaryKey(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    datasetId: integer('dataset_id')
      .notNull()
      .references(() => dataSetTable.id),
    data: json('data').notNull().$type<Record<string, unknown>>(),
    latLong: geometry('lat_long', { type: 'point', mode: 'xy', srid: 4326 }),
  },
  t => ({
    spatialIndex: index('spatial_index').using('gist', t.latLong),
  }),
)

export const dataChartsTable = pgTable('data_chart', {
  id: serial('id').notNull().primaryKey(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  datasetId: integer('dataset_id')
    .notNull()
    .references(() => dataSetTable.id),
  name: text('name'),
  type: text('type', { enum: ['line', 'bar', 'pie'] }).notNull(),
  // TODO: add query type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters: json('filters').notNull().$type<{ label: string; query: any }[]>(),
})
