import { z } from 'zod';

import { EnvSchema } from './env.schema.js';

export type EnvType = z.infer<typeof EnvSchema>;
