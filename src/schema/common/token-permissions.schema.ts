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
import { z } from 'zod';
import { TokenPermission } from '../../types/permissions.js';

/**
 * Schema for GitHub Action token permissions.
 *
 * This schema defines the structure of a token permission object, which can be used to validate and parse
 * GitHub Action token permissions. The schema includes optional properties that represent different types
 * of permissions that a token can have.
 */
export const TokenPermissionsSchema = z
  .object({
    /**
     * Action permissions.
     *
     * When using the `token` GitHub Actions secret, you can specify the `action` permission to control which
     * actions the token can perform. For example, setting `action: 'read'` allows the token to read repository
     * data, but not push changes or create issues.
     */
    action: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls which actions the token can perform.'),
    /**
     * Attestation permissions.
     *
     * The `attestation` permission is required when using the `github.com` token. It determines whether the
     * token can submit attested data to GitHub, such as code ownership declarations.
     */
    attestations: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe(
        'Determines whether the token can submit attested data to GitHub.'
      ),
    /**
     * Check permissions.
     *
     * When using the `token` GitHub Actions secret, you can specify the `checks` permission to control which
     * checks the token can run. For example, setting `checks: 'pull_request'` allows the token to run pull
     * request checks, but not code ownership declarations.
     */
    checks: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Determines whether the token can run checks.'),
    /**
     * Contents permissions.
     *
     * The `contents` permission determines whether the token can access repository contents. When set to
     * `read`, the token can read repository data, but not push changes or create issues.
     */
    contents: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Determines whether the token can access repository contents.'),
    /**
     * Deployment permissions.
     *
     * The `deployments` permission controls which deployment events the token can trigger. For example,
     * setting `deployments: 'auto'` allows the token to auto-deploy code changes, but not push changes
     * manually.
     */
    deployments: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls which deployment events the token can trigger.'),
    /**
     * Discussion permissions.
     *
     * The `discussions` permission determines whether the token can create or participate in discussions on
     * issues. When set to `read`, the token can read discussion comments, but not post new comments.
     */
    discussions: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe(
        'Determines whether the token can create or participate in discussions on issues.'
      ),
    /**
     * Id-Token permissions.
     *
     * The `id-token` permission controls access to the GitHub ID token, which contains information about
     * the user's identity and repository permissions. When set to `read`, the token can read the ID token,
     * but not write to it.
     */
    'id-Token': z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls access to the GitHub ID token.'),
    /**
     * Issue permissions.
     *
     * The `issues` permission determines whether the token can create, edit, or delete issues. When set
     * to `read`, the token can read issue comments and history, but not post new comments.
     */
    issues: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe(
        'Determines whether the token can create, edit, or delete issues.'
      ),
    /**
     * Package permissions.
     *
     * The `packages` permission controls access to package repositories. When set to `read`, the token
     * can read package data, but not push changes or create issues.
     */
    packages: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls access to package repositories.'),
    /**
     * Page permissions.
     *
     * The `pages` permission determines whether the token can deploy GitHub Pages sites. When set to `read`,
     * the token can read page data, but not write to it.
     */
    pages: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls whether the token can deploy GitHub Pages sites.'),
    /**
     * Pull-Request permissions.
     *
     * The `pull-request` permission controls which pull request events the token can trigger. For example,
     * setting `pull-request: 'auto'` allows the token to auto-create or update pull requests, but not push
     * changes manually.
     */
    'pull-requests': z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls which pull request events the token can trigger.'),
    /**
     * Repository-Project permissions.
     *
     * The `repository-projects` permission controls access to repository projects. When set to `read`,
     * the token can read project data, but not write to it.
     */
    'repository-projects': z
      .nativeEnum(TokenPermission)
      .optional()
      .describe('Controls access to repository projects.'),
    /**
     * Security-Event permissions.
     *
     * The `security-events` permission determines whether the token can create or delete security events.
     * When set to `read`, the token can read security event data, but not post new events.
     */
    'security-events': z
      .nativeEnum(TokenPermission)
      .optional()
      .describe(
        'Determines whether the token can create or delete security events.'
      ),
    /**
     * Status permissions.
     *
     * The `statuses` permission controls which status updates the token can create or update. For example,
     * setting `statuses: 'push'` allows the token to push new status updates, but not delete them.
     */
    statuses: z
      .nativeEnum(TokenPermission)
      .optional()
      .describe(
        'Controls which status updates the token can create or update.'
      ),
  })
  .describe('GitHub Token permissions.')
  .default({});
