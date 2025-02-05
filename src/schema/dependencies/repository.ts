import { z } from 'zod';

export const RepositorySchema = z.object({
  githubHost: z.string().url().optional(),
  projectSlug: z.string(),
  releaseTag: z.string(),
  friendlyName: z.string(),
  description: z.string(),
});
