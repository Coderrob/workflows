import { z } from 'zod';

import { BrandingSchema } from './branding.schema.js';

/**
 * Validates and parses a branding object.
 *
 * @param input - The branding object to validate and parse.
 * @returns A parsed branding object if valid, otherwise throws an error.
 */
export type BrandingType = z.infer<typeof BrandingSchema>;
