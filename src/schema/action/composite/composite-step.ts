import { z } from 'zod';

import { CompositeStepSchema } from './composite-step.schema';

/**
 * A type representing a composite step, which is a step that can be composed of multiple sub-steps.
 * @typedef {Object} CompositeStepType
 */
export const CompositeStepType = z.infer<typeof CompositeStepSchema>;
