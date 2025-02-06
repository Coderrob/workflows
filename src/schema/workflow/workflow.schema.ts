import { z } from 'zod';

import { ConcurrencySchema } from './concurrency.schema.js';
import { EnvSchema } from './env.schema.js';
import { EventSchema } from './event.schema.js';
import { JobSchema } from './job.schema.js';

export const WorkflowSchema = z
  .object({
    name: z.string().optional().describe('The name of the workflow.'),
    on: z
      .union([z.string(), z.array(z.string()), z.record(EventSchema)])
      .describe('The event that triggers the workflow.'),
    env: EnvSchema.optional().describe(
      'Environment variables for the workflow.'
    ),
    defaults: z
      .object({
        run: z
          .object({
            shell: z.string().optional().describe('Default shell to use.'),
            'working-directory': z
              .string()
              .optional()
              .describe('Default working directory.'),
          })
          .optional()
          .describe('Default settings for run steps.'),
      })
      .optional()
      .describe('Default settings for the workflow.'),
    concurrency: ConcurrencySchema.optional().describe(
      'Concurrency settings for the workflow.'
    ),
    jobs: z.record(JobSchema).describe('Jobs for the workflow.'),
  })
  .describe('GitHub Actions workflow schema.');
