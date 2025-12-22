import { z } from 'zod';

export const envSchema = z.object({
  MDBLIST_API_KEY: z.string(),
  TMDB_API_KEY: z.string(),
});

export type Env = z.infer<typeof envSchema>;
