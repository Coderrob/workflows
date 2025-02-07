import { z } from 'zod';

import { JobStepSchema } from './job-step.schema.js';

export type JobStep = z.infer<typeof JobStepSchema>;
