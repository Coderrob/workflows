import { z } from 'zod';

import { ConcurrencySchema } from './concurrency.schema';

export type ConcurrencyType = z.infer<typeof ConcurrencySchema>;
