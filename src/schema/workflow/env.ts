import { z } from 'zod';

import { EnvSchema } from './env.schema';

export type EnvType = z.infer<typeof EnvSchema>;
