import { z } from 'zod';

import { InputsSchema } from './inputs.schema.js';

export type InputsType = z.infer<typeof InputsSchema>;
