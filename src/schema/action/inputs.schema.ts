import { z } from 'zod';

import { validKeyRegex } from './constants';
import { InputEntrySchema } from './input-entry.schema';

/**
 * Inputs schema: a record whose keys match the validKeyRegex.
 */
export const InputsSchema = z
  .record(InputEntrySchema)
  .refine(
    (inputs) => Object.keys(inputs).every((key) => validKeyRegex.test(key)),
    {
      message: `Every input key must match the pattern${validKeyRegex.source}`,
    }
  );
