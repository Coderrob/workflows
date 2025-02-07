import { z } from 'zod';

import { EventSchema } from './event.schema.js';

export type Event = z.infer<typeof EventSchema>;
