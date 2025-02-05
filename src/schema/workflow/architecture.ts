import { z } from 'zod';

import { ArchitectureSchema } from './architecture.schema';

export type ArchitectureType = z.infer<typeof ArchitectureSchema>;
