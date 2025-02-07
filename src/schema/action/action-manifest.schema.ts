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
