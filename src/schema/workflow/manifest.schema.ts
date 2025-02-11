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
import { TokenPermissionsSchema } from '../common/token-permissions.schema.js';

export const WorkflowManifestSchema = TokenPermissionsSchema.extend({
  githubHost: z
    .string()
    .url()
    .optional()
    .default('https://github.com')
    .describe('The host of the GitHub instance.'),
  filePath: z
    .string()
    .describe(
      'The path to the workflow file within the repository. Typically, this is something like `.github/workflows/some-workflow.yml`.'
    ),
});
