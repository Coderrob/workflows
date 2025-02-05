import { z } from 'zod';

import { RunsSchema } from './runs.schema';

export type RunsType = z.infer<typeof RunsSchema>;
