import { z } from 'zod';

import { GitHubEventSchema } from './github-event.schema.js';

export type GitHubEventType = z.infer<typeof GitHubEventSchema>;
