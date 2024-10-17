/* eslint-disable @typescript-eslint/no-unused-vars */
import { dataRowTable, dataSetTable, mapTable, citiesTable } from '$db/schema'
import type { InsertDataset, SelectDataset, SelectCity } from '$db/schema'
import { db } from '$db'
import { eq } from 'drizzle-orm'

export const datasetC = {
  create: async (data: InsertDataset) => {
    return db.insert(dataSetTable).values(data)
  },
  getCityDatasets: async (cityId: SelectCity['id']) => {
    return db
      .select()
      .from(dataSetTable)
      .where(eq(dataSetTable.city_id, cityId))
  },
}
