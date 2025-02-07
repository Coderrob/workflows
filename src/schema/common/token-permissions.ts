import { z } from 'zod';
import { TokenPermissionsSchema } from './token-permissions.schema.js';

export type TokenPermissions = z.infer<typeof TokenPermissionsSchema>;
