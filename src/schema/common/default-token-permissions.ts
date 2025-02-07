import { TokenPermission } from '../../types/permissions.js';
import { TokenPermissions } from './token-permissions.js';

export const DEFAULT_TOKEN_PERMISSIONS: Readonly<TokenPermissions> =
  Object.freeze({
    action: TokenPermission.NONE,
    issues: TokenPermission.NONE,
    attestations: TokenPermission.NONE,
    checks: TokenPermission.NONE,
    contents: TokenPermission.NONE,
    deployments: TokenPermission.NONE,
    discussions: TokenPermission.NONE,
    'id-Token': TokenPermission.NONE,
    packages: TokenPermission.NONE,
    pages: TokenPermission.NONE,
    'pull-requests': TokenPermission.NONE,
    'repository-projects': TokenPermission.NONE,
    'security-events': TokenPermission.NONE,
    statuses: TokenPermission.NONE,
  });
