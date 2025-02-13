import { z } from 'zod';

export const JobsContextSchema = z
  .record(
    z.object({
      result: z
        .enum(['success', 'failure', 'cancelled'])
        .describe('The final result of the job.'),
      outputs: z
        .record(z.string())
        .describe('A map of outputs produced by the job.'),
    })
  )
  .describe('A map of jobs in the workflow, where each key is a job ID.');

export type JobsContext = z.infer<typeof JobsContextSchema>;
