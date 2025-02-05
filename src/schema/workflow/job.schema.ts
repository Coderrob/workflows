import { z } from 'zod';

import { ConcurrencySchema } from './concurrency.schema';
import { ContainerSchema } from './container.schema';
import { EnvSchema } from './env.schema';
import { JobStepSchema } from './job-step.schema';

export const JobSchema = z
  .object({
    'runs-on': z.string().describe('The type of runner to run the job on.'),
    needs: z
      .array(z.string())
      .optional()
      .describe('IDs of jobs that must complete before this job runs.'),
    permissions: z
      .union([z.string(), z.record(z.string())])
      .optional()
      .describe('Permissions for the job.'),
    if: z
      .string()
      .optional()
      .describe('Condition to determine whether the job runs.'),
    name: z.string().optional().describe('Name of the job.'),
    env: EnvSchema.optional().describe('Environment variables for the step.'),
    environment: z
      .union([
        z.string(),
        z.object({
          name: z.string().describe('Name of the environment.'),
          url: z.string().optional().describe('URL of the environment.'),
        }),
      ])
      .optional()
      .describe('Environment for the job.'),
    'continue-on-error': z
      .boolean()
      .optional()
      .describe('Whether to continue on error.'),
    'timeout-minutes': z
      .number()
      .optional()
      .describe('Timeout in minutes for the job.'),
    strategy: z
      .object({
        'fail-fast': z.boolean().optional().describe('Whether to fail fast.'),
        matrix: z
          .record(z.array(z.union([z.string(), z.number()])))
          .optional()
          .describe('Matrix of job configurations.'),
      })
      .optional()
      .describe('Strategy for the job.'),
    concurrency: ConcurrencySchema.optional().describe(
      'Concurrency settings for the job.'
    ),
    container: ContainerSchema.optional().describe(
      'Container settings for the job.'
    ),
    services: z
      .record(ContainerSchema)
      .optional()
      .describe('Services for the job.'),
    defaults: z
      .object({
        run: z
          .object({
            shell: z
              .string()
              .optional()
              .describe('Shell to use for running commands.'),
            'working-directory': z
              .string()
              .optional()
              .describe('Working directory for running commands.'),
          })
          .optional()
          .describe('Default settings for run steps.'),
      })
      .optional()
      .describe('Default settings for the job.'),
    steps: z.array(JobStepSchema).describe('Steps for the job.'),
  })
  .describe('A job in the workflow.');
