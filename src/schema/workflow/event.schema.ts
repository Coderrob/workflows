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
