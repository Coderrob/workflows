import { z } from 'zod';

import { ExpressionSyntaxSchema } from './expression-syntax.schema.js';

export type ExpressionSyntax = z.infer<typeof ExpressionSyntaxSchema>;
