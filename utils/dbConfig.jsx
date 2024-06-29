import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:G0oSDfv2mVTB@ep-dark-firefly-a1q3jw5f.ap-southeast-1.aws.neon.tech/Spendly?sslmode=require');
export const db = drizzle(sql, { schema });