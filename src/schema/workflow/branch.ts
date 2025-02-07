import { z } from 'zod';

import { BranchSchema } from './branch.schema.js';

export type Branch = z.infer<typeof BranchSchema>;
