import { z } from 'zod';

export const ExpressionSyntaxSchema = z
  .string()
  .describe('GitHub Actions expression syntax.');
