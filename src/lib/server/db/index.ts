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

import { env } from '$env/dynamic/private'

export const client = postgress(env.DATABASE_URL)


export const db = drizzle(client, { logger, schema })
