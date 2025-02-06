import { z } from 'zod';

import { ExpressionSyntaxSchema } from './expression-syntax.schema.js';

export const ExpressionSyntaxType = z.infer<typeof ExpressionSyntaxSchema>;
