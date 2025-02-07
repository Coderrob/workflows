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
