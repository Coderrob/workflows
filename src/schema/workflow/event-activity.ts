import { z } from 'zod';

import { EventActivitySchema } from './event-activity.schema.js';

export type EventActivityType = z.infer<typeof EventActivitySchema>;
