import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5434, // your mapped host port
  user: 'base',
  password: 'base',
  database: 'postgres',
});

export default pool;