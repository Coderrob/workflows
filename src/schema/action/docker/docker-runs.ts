import { z } from 'zod';

import { DockerRunsSchema } from './docker-runs.schema.js';

export const DockerRunsType = z.infer<typeof DockerRunsSchema>;
