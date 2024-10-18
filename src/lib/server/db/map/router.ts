import { procedure, router } from '$trpc/t'

import { z } from 'zod'

import { createInsertSchema } from 'drizzle-zod'
import { mapTable } from './schema'
import { TRPCError } from '@trpc/server'

import { cityC, datasetC, mapC } from '$db/controller'

export const mapRouter = router({
  createMap: procedure
    .input(
      z.object({
        map: createInsertSchema(mapTable),
        layers: z.number().array(),
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

export const cityRoutere = router({
  create: procedure
    .input(
      z.object({
        map: createInsertSchema(mapTable),
        layers: z.number().array(),
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
