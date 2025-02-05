import { z } from 'zod';

import { BranchSchema } from './branch.schema';

export type BranchType = z.infer<typeof BranchSchema>;
