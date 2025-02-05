import { z } from 'zod';

import { NodeRunsSchema } from './node-runs.schema';

export const NodeRunsType = z.infer<typeof NodeRunsSchema>;
