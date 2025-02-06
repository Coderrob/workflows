import { z } from 'zod';

import { EventSchema } from './event.schema.js';

export type EventType = z.infer<typeof EventSchema>;
