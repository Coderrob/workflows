import { z } from 'zod';

import { WorkflowSchema } from './workflow.schema.js';

export type Workflow = z.infer<typeof WorkflowSchema>;
