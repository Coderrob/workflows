import { z } from 'zod';

import { ActionSchema } from './action.schema.js';

export type Actions = z.infer<typeof ActionSchema>;
