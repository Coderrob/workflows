import { z } from 'zod';

import { EnvSchema } from './env.schema.js';

export type Env = z.infer<typeof EnvSchema>;
