import { z } from 'zod';

import { InputsSchema } from './inputs.schema';

export type InputsType = z.infer<typeof InputsSchema>;
