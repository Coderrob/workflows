import { z } from 'zod';

export const ActionManifestSchema = z.object({
  githubHost: z
    .string()
    .url()
    .optional()
    .default('https://github.com')
    .describe('The host of the GitHub instance.'),
  projectSlug: z.string().describe('The slug of the project on GitHub.'),
  branch: z
    .string()
    .optional()
    .describe(
      'The branch of the repository to use if a release tag is not provided.'
    ),
  releaseTag: z
    .string()
    .optional()
    .default('latest')
    .describe('The tag or version of the repository to use.'),
  friendlyName: z
    .string()
    .optional()
    .describe('A human-readable name for the action.'),
  description: z
    .string()
    .optional()
    .describe('A brief description of the action.'),
});
