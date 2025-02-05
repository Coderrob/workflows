import { z } from 'zod';

import { GitHubEventSchema } from './github-event.schema';

export type GitHubEventType = z.infer<typeof GitHubEventSchema>;
