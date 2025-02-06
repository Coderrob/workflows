import { z } from 'zod';

import { BranchSchema } from './branch.schema.js';

export type BranchType = z.infer<typeof BranchSchema>;
