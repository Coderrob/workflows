/*
 * Copyright 2025 Robert Lindley
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { z } from 'zod';

import { ConcurrencySchema } from './concurrency.schema.js';
import { ContainerSchema } from './container.schema.js';
import { EnvSchema } from './env.schema.js';
import { JobStepSchema } from './job-step.schema.js';

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
