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
        // dataset: createInsertSchema(dataSetTable, {
        //   type: z.string().refine(v => v === 'address'),
        // }),
        dataset : z.any(),
        points: z.any().array()
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
  
  // plugin drizzle zod
  update: procedure
  .input(
    z.object({
      id : z.number(),
      //1° parametro schema, 2° validação dos dados
      //createInsertSchema => Retorna o schema da tabela
      data: createInsertSchema(dataSetTable, 
        {
          center : z.object({x:z.number(), y:z.number()}), 
          zoom:z.number().min(0).max(30), 
          name:z.string().min(3, "O nome precisa ter pelo menos 3 caracteres").max(256, "O nome pode ter no máximo 256 caracteres")
        }
      )
      //Escolhe os campos que vão ser utilizados no query de update
      .pick({center : true, zoom : true, name : true, public : true})
      //Fala que nenhum campo é obrigatório
      .partial()
    })
  )
  .mutation(async ({input}) => {console.log(input)} )
})
