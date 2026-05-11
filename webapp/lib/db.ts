import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'timo',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'heiprob',
  password: process.env.DB_PASSWORD || 'timo',
  port: parseInt(process.env.DB_PORT || '5432'),
  // Optional: ssl: { rejectUnauthorized: false }, // For SSL connections
});

export default pool;
