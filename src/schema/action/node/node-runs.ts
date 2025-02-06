import { z } from 'zod';

import { NodeRunsSchema } from './node-runs.schema.js';

export const NodeRunsType = z.infer<typeof NodeRunsSchema>;
