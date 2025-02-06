import { z } from 'zod';

import { InputEntrySchema } from './input-entry.schema.js';

export type OutputEntryType = z.infer<typeof InputEntrySchema>;
