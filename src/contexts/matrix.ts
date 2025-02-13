import { z } from 'zod';

export const MatrixContextSchema = z
  .record(z.union([z.string(), z.number()]))
  .describe(
    'A map of matrix variables, where each key is a matrix parameter and value is the assigned value for this job.'
  );

export type MatrixContext = z.infer<typeof MatrixContextSchema>;
