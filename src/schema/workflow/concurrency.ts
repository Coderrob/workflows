import { z } from 'zod';

import { ConcurrencySchema } from './concurrency.schema.js';

export type Concurrency = z.infer<typeof ConcurrencySchema>;
