import { z } from 'zod';
import { WorkflowManifestSchema } from './manifest.schema.js';

export const WorkflowManifest = z.infer<typeof WorkflowManifestSchema>;
