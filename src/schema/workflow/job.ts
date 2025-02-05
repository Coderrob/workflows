import { z } from 'zod';

import { JobSchema } from './job.schema';

export type JobType = z.infer<typeof JobSchema>;
