import { z } from 'zod';

export const EventActivitySchema = z
  .object({
    types: z
      .array(z.string())
      .optional()
      .describe('Types of activity to trigger the event.'),
  })
  .describe('Activity types for events.');
