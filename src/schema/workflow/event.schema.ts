import { z } from 'zod';

export const EventSchema = z
  .union([
    z.string(),
    z.object({
      types: z
        .array(z.string())
        .optional()
        .describe('Types of activity to trigger the event.'),
      branches: z.array(z.string()).optional().describe('Branches to include.'),
      'branches-ignore': z
        .array(z.string())
        .optional()
        .describe('Branches to exclude.'),
      tags: z.array(z.string()).optional().describe('Tags to include.'),
      'tags-ignore': z
        .array(z.string())
        .optional()
        .describe('Tags to exclude.'),
      paths: z.array(z.string()).optional().describe('Paths to include.'),
      'paths-ignore': z
        .array(z.string())
        .optional()
        .describe('Paths to exclude.'),
    }),
  ])
  .describe('Event triggers for the workflow.');
