import { z } from 'zod';

import { ArchitectureSchema } from './architecture.schema.js';

export type Architecture = z.infer<typeof ArchitectureSchema>;
