/* eslint-disable @typescript-eslint/no-unused-vars */
import { relations } from 'drizzle-orm'

import * as s from './schema'

export const dataSetRelations = relations(s.dataSetTable, ({ one, many }) => ({
  rows: many(s.dataRowTable),
  made_by: one(s.userTable, {
    fields: [s.dataSetTable.created_by],
    references: [s.userTable.id],
  }),
  city: one(s.cityTable, {
    fields: [s.dataSetTable.city_id],
    references: [s.cityTable.id],
  }),
  layer: many(s.mapLayerTable),
}))

export const dataRowRelations = relations(s.dataRowTable, ({ one }) => ({
  dataset: one(s.dataSetTable, {
    fields: [s.dataRowTable.datasetId],
    references: [s.dataSetTable.id],
  }),
}))

export const mapRelations = relations(s.mapTable, ({ one, many }) => ({
  layers: many(s.mapLayerTable),
  made_by: one(s.userTable, {
    fields: [s.mapTable.created_by],
    references: [s.userTable.id],
  }),
  city: one(s.cityTable, {
    fields: [s.mapTable.city_id],
    references: [s.cityTable.id],
  }),
}))

export const mapLayerRelations = relations(s.mapLayerTable, ({ one }) => ({
  map: one(s.mapTable, {
    fields: [s.mapLayerTable.map_id],
    references: [s.mapTable.id],
  }),
  dataset: one(s.dataSetTable, {
    fields: [s.mapLayerTable.layer_id],
    references: [s.dataSetTable.id],
  }),
}))

export const cityRelations = relations(s.cityTable, ({ many }) => ({
  datasets: many(s.dataSetTable),
  maps: many(s.mapTable),
  users: many(s.userTable),
}))

export const userRelations = relations(s.userTable, ({ many, one }) => ({
  datasets: many(s.dataSetTable),
  maps: many(s.mapTable),
  citiy: one(s.cityTable, {
    fields: [s.userTable.cityId],
    references: [s.cityTable.id],
  }),
}))
