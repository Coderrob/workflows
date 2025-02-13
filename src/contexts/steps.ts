import { z } from 'zod';

export const StepsContextSchema = z
  .record(
    z.object({
      conclusion: z
        .enum(['success', 'failure', 'cancelled'])
        .nullable()
        .describe('The final outcome of the step.'),
      outcome: z
        .enum(['success', 'failure', 'cancelled', 'skipped'])
        .nullable()
        .describe('The outcome of the step.'),
    })
  )
  .describe('A map of steps in the current job, where each key is a step ID.');

export type StepsContext = z.infer<typeof StepsContextSchema>;
