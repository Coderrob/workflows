import { z } from 'zod';
import { WorkflowManifestSchema } from './manifest.schema.js';

export type WorkflowManifest = z.infer<typeof WorkflowManifestSchema>;
