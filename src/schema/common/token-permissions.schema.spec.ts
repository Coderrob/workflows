import { TokenPermission } from '../../types/permissions.js';
import { TokenPermissionsSchema } from './token-permissions.schema.js';

describe('Token Permissions', () => {
  it('should have a default permission of NONE', () => {
    expect(TokenPermissionsSchema.parse({})).toBe(TokenPermission.NONE);
  });
});
