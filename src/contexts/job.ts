import { z } from 'zod';

export const JobContextSchema = z.object({
  container: z
    .string()
    .nullable()
    .describe('The container used in the job, if applicable.'),
  services: z
    .record(z.string())
    .nullable()
    .describe('A map of services used in the job, if applicable.'),
  status: z
    .enum(['success', 'failure', 'cancelled'])
    .describe('The current status of the job.'),
});

export type JobContext = z.infer<typeof JobContextSchema>;
