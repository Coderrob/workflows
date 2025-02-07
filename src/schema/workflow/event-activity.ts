import { z } from 'zod';

import { EventActivitySchema } from './event-activity.schema.js';

export type EventActivity = z.infer<typeof EventActivitySchema>;
