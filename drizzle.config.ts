import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/auth-schema.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    token: process.env.DATABASE_AUTH_TOKEN,
  },
});
