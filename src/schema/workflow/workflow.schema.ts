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
