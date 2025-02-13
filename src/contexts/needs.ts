import { z } from 'zod';

export const NeedsContextSchema = z
  .record(
    z.object({
      result: z
        .enum(['success', 'failure', 'cancelled'])
        .describe('The final result of the dependent job.'),
      outputs: z
        .record(z.string())
        .describe('A map of outputs produced by the dependent job.'),
    })
  )
  .describe(
    'A map of jobs that this job depends on, where each key is a job ID.'
  );

export type NeedsContext = z.infer<typeof NeedsContextSchema>;
