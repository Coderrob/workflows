import { z } from 'zod';

export const InputsContextSchema = z
  .record(z.string())
  .describe(
    'A map of workflow input values, where each key is an input name and value is the provided input value.'
  );

export type InputsContext = z.infer<typeof InputsContextSchema>;
