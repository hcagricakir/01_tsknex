import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  database: 'userdb',
  port: 5432
})

