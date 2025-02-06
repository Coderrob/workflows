import { z } from 'zod';

import { ConfigurationSchema } from './configuration.schema.js';

export type ConfigurationType = z.infer<typeof ConfigurationSchema>;
