import { z } from 'zod';

import { validKeyRegex } from './constants.js';
import { OutputEntrySchema } from './output-entry.schema.js';

/**
 * Outputs schema: a record whose keys match the validKeyRegex.
 */
export const OutputsSchema = z
  .record(OutputEntrySchema)
  .refine((outputs) => Object.keys(outputs).every(validKeyRegex.test), {
    message: `Every output key must match the pattern ${validKeyRegex.source}`,
  });
