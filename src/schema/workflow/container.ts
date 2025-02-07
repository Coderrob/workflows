import { z } from 'zod';

import { ContainerSchema } from './container.schema.js';

export type Container = z.infer<typeof ContainerSchema>;
