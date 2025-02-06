import { z } from 'zod';

import { RunsSchema } from './runs.schema.js';

export type RunsType = z.infer<typeof RunsSchema>;
