/*
 * Copyright 2025 Robert Lindley
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
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
