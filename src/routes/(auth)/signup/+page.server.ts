/* eslint-disable @typescript-eslint/no-unused-vars */
import { sessionsC } from '$lib/server/auth/sessions'
import { setSessionTokenCookie } from '$lib/server/auth/cookies'
import { fail, redirect } from '@sveltejs/kit'

import type { Actions, PageServerLoad } from './$types'
import { emailTemplate, sendMail } from '$lib/server/services/email'

import { userC } from '$db/controller'

export const load: PageServerLoad = async event => {
  if (event.locals.user) {
    return redirect(302, '/')
  }
}

export const actions: Actions = {
  default: async event => {
    const formData = await event.request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')

    const city = formData.get('city')
    const country = formData.get('country')

    const { data, error } = await userC.auth.register.withPassword(
      username,
      email,
      password,
    )

    if (error) {
      return fail(400, {
        success: false,
        message: error.message,
        username,
        email,
      })
    }

    const userId = data.user.id
    const ueserEmail = data.user.email

    const token = sessionsC.generateSessionToken()
    const session = await sessionsC.createSession(token, userId)
    setSessionTokenCookie(event, token, session.expiresAt)

    const verificationCode = await userC.verificationCode.generate(
      userId,
      ueserEmail,
    )

    await sendMail(ueserEmail, emailTemplate.verificationCode(verificationCode))

    return redirect(302, '/verify-email')
  },
}
