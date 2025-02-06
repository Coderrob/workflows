import { z } from 'zod';

import { ContainerSchema } from './container.schema.js';

export type ContainerType = z.infer<typeof ContainerSchema>;
