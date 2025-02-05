import { z } from 'zod';

import { InputEntrySchema } from './input-entry.schema';

export type OutputEntryType = z.infer<typeof InputEntrySchema>;
