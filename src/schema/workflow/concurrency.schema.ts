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

export const ConcurrencySchema = z
  .object({
    group: z.string().describe('The concurrency group.'),
    'cancel-in-progress': z
      .boolean()
      .optional()
      .describe('Whether to cancel in-progress jobs.'),
  })
  .describe('Concurrency settings for the workflow.');
