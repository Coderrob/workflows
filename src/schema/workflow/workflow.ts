import { z } from 'zod';

import { WorkflowSchema } from './workflow.schema.js';

export type WorkflowType = z.infer<typeof WorkflowSchema>;
