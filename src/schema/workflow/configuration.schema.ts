import { z } from 'zod';

export const ConfigurationSchema: z.ZodType<unknown> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.number(),
      z.boolean(),
      z.object({}).catchall(ConfigurationSchema),
      z.array(ConfigurationSchema),
    ])
  )
  .describe('Configuration settings.');
