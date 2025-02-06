import { z } from 'zod';

import { ArchitectureSchema } from './architecture.schema.js';

export type ArchitectureType = z.infer<typeof ArchitectureSchema>;
