import { z } from 'zod';
import { ActionManifestSchema } from './manifest.schema.js';

export type ActionManifest = z.infer<typeof ActionManifestSchema>;
