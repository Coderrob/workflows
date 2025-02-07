import { z } from 'zod';

import { ConfigurationSchema } from './configuration.schema.js';

export type Configuration = z.infer<typeof ConfigurationSchema>;
