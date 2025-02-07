import { z } from 'zod';

import { InputEntrySchema } from './input-entry.schema.js';

export type OutputEntry = z.infer<typeof InputEntrySchema>;
