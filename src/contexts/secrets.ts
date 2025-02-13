import { z } from 'zod';

export const SecretsContextSchema = z
  .record(z.string())
  .describe(
    'A map of secret values, where each key is a secret name and value is its corresponding secret string.'
  );

export type SecretsContext = z.infer<typeof SecretsContextSchema>;
