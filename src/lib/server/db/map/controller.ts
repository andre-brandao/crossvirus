import { mapTable, cityTable, mapLayerTable } from '$db/schema'
import type { InsertCity, InsertMap, SelectCity, SelectMap } from '$db/schema'
import { db } from '$db'
import { eq } from 'drizzle-orm'

export const cityC = {
  create: async function (data: InsertCity) {
    return db.insert(cityTable).values(data)
  },
  update: async function (cityId: SelectCity['id'], data: Partial<SelectCity>) {
    return db.update(cityTable).set(data).where(eq(cityTable.id, cityId))
  },
  getCitiesFromCountry: async function (country: string) {
    return db.select().from(cityTable).where(eq(cityTable.country, country))
  },
  getCityById: async function (cityId: SelectCity['id']) {
    return db.select().from(cityTable).where(eq(cityTable.id, cityId))
  },
}

export const mapC = {
  create: async function (data: {
    map: InsertMap
    layers: { layer_id: number }[]
  }) {
    const [map] = await db.insert(mapTable).values(data.map).returning()
    const layers = data.layers.map(layer => ({
      layer_id: layer.layer_id,
      map_id: map.id,
    }))

    await db.insert(mapLayerTable).values(layers)
  },
  getMapById: async function (mapId: SelectMap['id']) {
    return await db.query.mapTable.findFirst({
      where: t => eq(t.id, mapId),
      with: {
        city: {
          columns: {
            name: true,
          },
        },
        layers: {
          with: {
            dataset: {
              with: {
                rows: {
                  columns: {
                    id: true,
                    data: true,
                    latLong: true,
                  },
                },
              },
            },
          },
        },
      },
    })
  },
}
