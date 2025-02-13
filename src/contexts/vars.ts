import { z } from 'zod';

export const VarsContextSchema = z
  .record(z.string())
  .describe(
    'A map of custom variables defined in the workflow or organization settings.'
  );

export type VarsContext = z.infer<typeof VarsContextSchema>;
