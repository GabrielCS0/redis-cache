import { Pool } from 'pg'

export async function createConnection(): Promise<Pool> {
  const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB
  })

  await pool.connect()
  return pool
}
