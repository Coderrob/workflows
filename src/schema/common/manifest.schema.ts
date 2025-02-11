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
import { TokenPermissionsSchema } from './token-permissions.schema.js';

export const ManifestSchema = z.object({
  githubHost: z
    .string()
    .url()
    .optional()
    .default('https://github.com')
    .describe('The host of the GitHub instance.'),
  projectSlug: z.string().describe('The slug of the project on GitHub.'),
  friendlyName: z
    .string()
    .optional()
    .describe('A human-readable name for display.'),
  description: z
    .string()
    .optional()
    .describe('A brief description of the action.'),
  permissions: TokenPermissionsSchema.describe(
    'The GitHub Token permissions required by the action.'
  ),
  releases: z
    .array(z.string())
    .optional()
    .default([])
    .describe('Release tags available for this action.'),
  environment: z
    .record(z.string(), z.string())
    .optional()
    .default({})
    .describe('Environment variables that can be set for the action.'),
});
