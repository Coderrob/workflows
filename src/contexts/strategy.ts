import { z } from 'zod';

export const StrategyContextSchema = z.object({
  job_index: z.number().describe('The index of the job in the matrix.'),
  job_total: z.number().describe('The total number of jobs in the matrix.'),
  job_count: z
    .number()
    .describe('The total number of jobs in the matrix (alias for job_total).'),
});

export type StrategyContext = z.infer<typeof StrategyContextSchema>;
