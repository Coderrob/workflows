import { z } from 'zod';
import { ActionManifestSchema } from './action-manifest.schema.js';

export type ActionManifest = z.infer<typeof ActionManifestSchema>;
