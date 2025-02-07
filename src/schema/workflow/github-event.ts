import { z } from 'zod';

import { GitHubEventSchema } from './github-event.schema.js';

export type GitHubEvent = z.infer<typeof GitHubEventSchema>;
