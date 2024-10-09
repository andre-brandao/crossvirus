import { drizzle } from 'drizzle-orm/postgres-js'
import postgress from 'postgres'
import * as schema from './schema'

import { DefaultLogger, type LogWriter } from 'drizzle-orm/logger'

class MyLogWriter implements LogWriter {
  write(message: string) {
    console.log(message)
  }
}
const logger = new DefaultLogger({ writer: new MyLogWriter() })

// import { dev } from '$app/environment'
import { env } from '$env/dynamic/private'
// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set')
//
// if (!dev && !env.DATABASE_AUTH_TOKEN)
//   throw new Error('DATABASE_AUTH_TOKEN is not set')
//
// export const libsqlClient = createClient({
//   url: dev ? 'file:local.db' : env.DATABASE_URL,
//   authToken: env.DATABASE_AUTH_TOKEN,
// })

// *! Uncomment the following line when seeding */

// if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set')

export const client = postgress(env.DATABASE_URL)


export const db = drizzle(client, { logger, schema })
