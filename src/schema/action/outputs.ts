import { z } from 'zod';

import { InputsSchema } from './inputs.schema';

export type OutputsType = z.infer<typeof InputsSchema>;
