import { z } from 'zod';

import { EventActivitySchema } from './event-activity.schema';

export type EventActivityType = z.infer<typeof EventActivitySchema>;
