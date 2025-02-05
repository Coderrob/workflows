import { z } from 'zod';

export const EnvSchema = z
  .record(z.string())
  .describe('Environment variables.');
