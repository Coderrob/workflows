import { z } from 'zod';

import { JobStepSchema } from './job-step.schema.js';

export type JobStepType = z.infer<typeof JobStepSchema>;
