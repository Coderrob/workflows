import { z } from 'zod';

import { JobSchema } from './job.schema.js';

export type JobType = z.infer<typeof JobSchema>;
