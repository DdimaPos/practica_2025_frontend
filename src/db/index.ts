import {config} from 'dotenv';
import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

config({path: '../../.env'});
const client = postgres(process.env.DATABASE_URL!, {prepare: false});
const db = drizzle({client: client, schema});

export default db;
