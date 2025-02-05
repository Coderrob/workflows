import { z } from 'zod';

/**
 * Represents the schema for branding information.
 */
export const BrandingSchema = z
  .object({
    color: z.string(),
    icon: z.string(),
  })
  .strict();
