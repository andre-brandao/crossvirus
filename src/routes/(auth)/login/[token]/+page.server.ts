import type { PageServerLoad } from './$types'
import { sessionsC } from '$lib/server/auth/sessions'
import { setSessionTokenCookie } from '$lib/server/auth/cookies'
import { userC } from '$db/controller'
import { error, redirect } from '@sveltejs/kit'

export const load = (async event => {
  const { params, setHeaders } = event
  const verificationToken = params.token

  setHeaders({
    'Referrer-Policy': 'strict-origin',
  })

  const { data, error: err } =
    await userC.auth.login.magicLink.validate(verificationToken)

  if (err) {
    return error(400, {
      message: err.message,
    })
  }

  const verifiedUser = data.user

  try {
    await sessionsC.invalidateUserSessions(verifiedUser.id)

    await userC.update(verifiedUser.id, {
      emailVerified: true,
    })

    const token = sessionsC.generateSessionToken()
    const session = await sessionsC.createSession(token, verifiedUser.id)
    setSessionTokenCookie(event, token, session.expiresAt)
  } catch (e) {
    console.error(e)
    return error(500, {
      message: 'Failed to verify email',
    })
  }

  if (!verifiedUser.password_hash) {
    return redirect(302, '/onboarding')
  }

  return redirect(302, '/')
}) satisfies PageServerLoad
