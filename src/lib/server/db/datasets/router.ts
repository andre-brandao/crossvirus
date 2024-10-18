import { procedure, router } from '$trpc/t'

import { z } from 'zod'

import { createInsertSchema } from 'drizzle-zod'
import { TRPCError } from '@trpc/server'

import { cityC, datasetC, mapC } from '$db/controller'
import { dataRowTable, dataSetTable } from './schema'

export const datasetRouter = router({
  create: router({
    byAddress: procedure
      .input(
        z.object({
          dataset: createInsertSchema(dataSetTable, {
            type: z.string().refine(v => v === 'address'),
          }),
          points: createInsertSchema(dataRowTable)
            .omit({
              datasetId: true,
            })
            .array(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        console.error('Not implemented', input, ctx)
        throw new TRPCError({
          code: 'METHOD_NOT_SUPPORTED',
          message: 'Not implemented' + input,
        })
      }),
    byLatLong: procedure
      .input(
        z.object({
          dataset: createInsertSchema(dataSetTable, {
            type: z.string().refine(v => v === 'lat_long'),
          }),
          points: createInsertSchema(dataRowTable)
            .omit({
              datasetId: true,
            })
            .array(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        console.error('Not implemented', input, ctx)
        throw new TRPCError({
          code: 'METHOD_NOT_SUPPORTED',
          message: 'Not implemented' + input,
        })
      }),
  }),

  addRows: procedure
    .input(
      z.object({
        datasetId: z.number(),
        points: createInsertSchema(dataRowTable)
          .omit({
            datasetId: true,
          })
          .array(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      console.error('Not implemented', input, ctx)
      throw new TRPCError({
        code: 'METHOD_NOT_SUPPORTED',
        message: 'Not implemented' + input,
      })
    }),
})
