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
import { ManifestSchema } from '../common/manifest.schema.js';

export const ActionManifestSchema = ManifestSchema.extend({
  releaseTag: z
    .string()
    .optional()
    .default('latest')
    .describe('The tag or version of the repository to use.'),
  branch: z
    .string()
    .optional()
    .describe(
      'The branch of the repository to use if a release tag is not provided.'
    ),
});
