import { i18n } from '$lib/i18n/i18n'
import { sessionsC } from '$lib/server/auth/sessions'
import {
  setSessionTokenCookie,
  deleteSessionTokenCookie,
} from '$lib/server/auth/cookies'
import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

import { bugReport } from '$db/controller'

const handleSession: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get('session')
  if (!sessionId) {
    event.locals.user = null
    event.locals.session = null
    return resolve(event)
  }

  const { session, user } = await sessionsC.validateSessionToken(sessionId)
  if (session !== null) {
    setSessionTokenCookie(event, sessionId, session.expiresAt)
  } else {
    deleteSessionTokenCookie(event)
  }
  event.locals.user = user
  event.locals.session = session
  return resolve(event)
}

import { createContext } from '$trpc/context'
import { router } from '$trpc/router'
import { createTRPCHandle } from 'trpc-sveltekit'

const handleTRPC = createTRPCHandle({
  router,
  createContext,
  onError: ({ error, type, path, input, ctx, req }) => {
    console.error(
      `Encountered error while trying to process ${type} @ ${path}:`,
      error,
    )
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      // TODO: send to bug reporting
      const userId = ctx?.locals.user?.id
      bugReport.insertBugReport({
        status: 'TODO',
        text: 'Internal server error',
        created_by: userId,
        metadata: {
          path,
          type,
          error,
          input,
          req,
        },
      })
    }
  },
})

export const handle: Handle = sequence(i18n.handle(), handleSession, handleTRPC)
