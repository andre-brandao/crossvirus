/* eslint-disable @typescript-eslint/no-unused-vars */
import { procedure, t } from './t'

import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

// ROUTES
import { userRouter } from '$db/user/router'

//  RPC = REMOTE PROCCEDURE CALL
// TRPC = TS REMOTE PROCCEDURE CALL
// GRPC = GOOGLE REMOTE PROCCEDURE CALL

export const router = t.router({
  auth: userRouter,
})

export type Router = typeof router
export type RouterInputs = inferRouterInputs<Router>
export type RouterOutputs = inferRouterOutputs<Router>
