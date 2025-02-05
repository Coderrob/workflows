import { z } from 'zod';

import { ContainerSchema } from './container.schema';

export type ContainerType = z.infer<typeof ContainerSchema>;
