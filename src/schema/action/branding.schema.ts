import { z } from 'zod';
import { BrandIcons } from '../../types/brand-icons.js';

/**
 * Represents the schema for branding information.
 */
export const BrandingSchema = z
  .object({
    color: z.string(),
    icon: z.nativeEnum(BrandIcons),
  })
  .strict();
