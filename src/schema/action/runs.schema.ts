import { z } from 'zod';

import { CompositeRunsSchema } from './composite/composite-runs.schema.js';
import { DockerRunsSchema } from './docker/docker-runs.schema.js';
import { NodeRunsSchema } from './node/node-runs.schema.js';

/**
 * Runs schema as a discriminated union using the `using` field.
 */
export const RunsSchema = z.discriminatedUnion('using', [
  CompositeRunsSchema,
  NodeRunsSchema,
  DockerRunsSchema,
]);
