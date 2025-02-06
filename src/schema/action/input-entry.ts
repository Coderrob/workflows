import { z } from 'zod';

import { InputEntrySchema } from './input-entry.schema.js';

export type InputEntryType = z.infer<typeof InputEntrySchema>;
