/* eslint-disable @typescript-eslint/no-unused-vars */
import { dataRowTable, dataSetTable, mapTable, cityTable } from '$db/schema'
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
  getDatasetWithRows: async (datasetId: SelectDataset['id']) => {
    return await db.query.dataSetTable.findFirst({
      where: t => eq(t.id, datasetId),
      // columns: {
      //   name: true,
      //   disease: true,
      // },
      with: {
        rows: {
          columns: {
            id: true,
            data: true,
            latLong: true,
          },
        },
        made_by: {
          columns: {
            name: true,
          },
        },
      },
    })
  },
}

async function teste() {
  const foo = await datasetC.getDatasetWithRows(1)
}
