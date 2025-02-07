import { z } from 'zod';

import { JobSchema } from './job.schema.js';

export type Job = z.infer<typeof JobSchema>;
