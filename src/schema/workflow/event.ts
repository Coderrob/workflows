import { z } from 'zod';

import { EventSchema } from './event.schema';

export type EventType = z.infer<typeof EventSchema>;
