import { z } from 'zod';

import { InputsSchema } from './inputs.schema.js';

export type Outputs = z.infer<typeof InputsSchema>;
