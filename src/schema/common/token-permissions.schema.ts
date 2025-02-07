import { z } from 'zod';
import { TokenPermission } from '../../types/permissions.js';

export const TokenPermissionsSchema = z.object({
  action: z.nativeEnum(TokenPermission),
  attestations: z.nativeEnum(TokenPermission),
  checks: z.nativeEnum(TokenPermission),
  contents: z.nativeEnum(TokenPermission),
  deployments: z.nativeEnum(TokenPermission),
  discussions: z.nativeEnum(TokenPermission),
  'id-Token': z.nativeEnum(TokenPermission),
  issues: z.nativeEnum(TokenPermission),
  packages: z.nativeEnum(TokenPermission),
  pages: z.nativeEnum(TokenPermission),
  'pull-requests': z.nativeEnum(TokenPermission),
  'repository-projects': z.nativeEnum(TokenPermission),
  'security-events': z.nativeEnum(TokenPermission),
  statuses: z.nativeEnum(TokenPermission),
});
