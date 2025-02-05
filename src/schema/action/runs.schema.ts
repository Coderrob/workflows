import { z } from 'zod';

import { CompositeRunsSchema } from './composite';
import { DockerRunsSchema } from './docker';
import { NodeRunsSchema } from './node';

/**
 * Runs schema as a discriminated union using the `using` field.
 */
export const RunsSchema = z.discriminatedUnion('using', [
  CompositeRunsSchema,
  NodeRunsSchema,
  DockerRunsSchema,
]);
