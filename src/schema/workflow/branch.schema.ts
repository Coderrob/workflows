import { z } from 'zod';

export const BranchSchema = z
  .array(z.string())
  .describe('A list of branch names or glob patterns.');
