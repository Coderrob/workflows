import { z } from 'zod';

export const RunnerContextSchema = z.object({
  arch: z
    .enum(['X86', 'X64', 'ARM', 'ARM64'])
    .describe('The architecture of the runner.'),
  environment: z
    .string()
    .describe('The environment where the runner is executing.'),
  name: z.string().describe('The name of the runner executing the job.'),
  os: z
    .enum(['Linux', 'Windows', 'macOS'])
    .describe('The operating system of the runner.'),
  temp: z.string().describe('The path to a temporary directory on the runner.'),
  tool_cache: z
    .string()
    .describe('The path to the directory containing installed tools.'),
});

export type RunnerContext = z.infer<typeof RunnerContextSchema>;
