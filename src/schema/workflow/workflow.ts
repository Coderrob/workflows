import { z } from 'zod';

import { WorkflowSchema } from './workflow.schema';

export type WorkflowType = z.infer<typeof WorkflowSchema>;
