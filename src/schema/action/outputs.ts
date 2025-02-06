import { z } from 'zod';

import { InputsSchema } from './inputs.schema.js';

export type OutputsType = z.infer<typeof InputsSchema>;
