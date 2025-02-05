import { z } from 'zod';

import { ExpressionSyntaxSchema } from './expression-syntax.schema';

export const ExpressionSyntaxType = z.infer<typeof ExpressionSyntaxSchema>;
