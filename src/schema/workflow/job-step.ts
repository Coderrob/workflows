import { z } from 'zod';

import { JobStepSchema } from './job-step.schema';

export type JobStepType = z.infer<typeof JobStepSchema>;
