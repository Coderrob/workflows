import { z } from 'zod';

import { ActionSchema } from './action.schema';

export type ActionsType = z.infer<typeof ActionSchema>;
