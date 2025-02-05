import { z } from 'zod';

import { EnvSchema } from './env.schema';

export const JobStepSchema = z.object({
  name: z.string().optional().describe('Name of the step.'),
  id: z.string().optional().describe('ID of the step.'),
  if: z
    .string()
    .optional()
    .describe('Condition to determine whether the step runs.'),
  uses: z.string().optional().describe('Action to use in the step.'),
  run: z.string().optional().describe('Command to run in the step.'),
  'working-directory': z
    .string()
    .optional()
    .describe('Working directory for the step.'),
  shell: z
    .string()
    .optional()
    .describe('Shell to use for running the command.'),
  with: z
    .record(z.union([z.string(), z.number(), z.boolean()]))
    .optional()
    .describe('Inputs for the action.'),
  env: EnvSchema.optional().describe('Environment variables for the step.'),
  'continue-on-error': z
    .boolean()
    .optional()
    .describe('Whether to continue on error.'),
});
