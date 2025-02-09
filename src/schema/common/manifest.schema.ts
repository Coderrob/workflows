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
