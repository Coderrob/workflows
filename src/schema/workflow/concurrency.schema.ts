import { z } from 'zod';

export const ConcurrencySchema = z
  .object({
    group: z.string().describe('The concurrency group.'),
    'cancel-in-progress': z
      .boolean()
      .optional()
      .describe('Whether to cancel in-progress jobs.'),
  })
  .describe('Concurrency settings for the workflow.');
