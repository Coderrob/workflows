import { z } from 'zod';

import { InputEntrySchema } from './input-entry.schema';

export type InputEntryType = z.infer<typeof InputEntrySchema>;
