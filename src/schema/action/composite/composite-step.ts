import { z } from 'zod';

import { CompositeStepSchema } from './composite-step.schema.js';

/**
 * A type representing a composite step, which is a step that can be composed of multiple sub-steps.
 * @typedef {Object} CompositeStepType
 */
export type CompositeStep = z.infer<typeof CompositeStepSchema>;
