import { z } from 'zod';

export const WorkflowManifestSchema = z.object({
  githubHost: z
    .string()
    .url()
    .optional()
    .default('https://github.com')
    .describe('The host of the GitHub instance.'),
  projectSlug: z.string().describe('The slug of the project on GitHub.'),
  filePath: z
    .string()
    .describe(
      'The path to the workflow file within the repository. Typically, this is something like `.github/workflows/some-workflow.yml`.'
    ),
  friendlyName: z
    .string()
    .optional()
    .describe('A human-readable name for the workflow.'),
  description: z
    .string()
    .optional()
    .describe('A brief description of the workflow.'),
});
