import { z } from 'zod';

export const GitHubEventSchema = z
  .object({
    types: z
      .array(z.string())
      .optional()
      .describe('Types of activity to trigger the event.'),
  })
  .describe('GitHub event triggers.');
