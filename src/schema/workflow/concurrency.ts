import { z } from 'zod';

import { ConcurrencySchema } from './concurrency.schema.js';

export type ConcurrencyType = z.infer<typeof ConcurrencySchema>;
