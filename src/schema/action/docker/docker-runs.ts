import { z } from 'zod';

import { DockerRunsSchema } from './docker-runs.schema';

export const DockerRunsType = z.infer<typeof DockerRunsSchema>;
