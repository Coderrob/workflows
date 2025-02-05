import { z } from 'zod';

import { ConfigurationSchema } from './configuration.schema';

export type ConfigurationType = z.infer<typeof ConfigurationSchema>;
