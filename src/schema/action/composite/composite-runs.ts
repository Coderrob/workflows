import { z } from 'zod';

import { CompositeRunsSchema } from './composite-runs.schema';

/**
 * Type definition for the CompositeRuns object.
 */
export const CompositeRunsType = z.infer<typeof CompositeRunsSchema>;
