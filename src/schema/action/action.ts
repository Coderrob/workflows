import { z } from 'zod';

import { ActionSchema } from './action.schema.js';

export type ActionsType = z.infer<typeof ActionSchema>;
