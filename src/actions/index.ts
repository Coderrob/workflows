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
import { ActionManifest } from '../schema/action/action-manifest.js';

export const actionsCheckout: ActionManifest = {
  githubHost: 'https://github.com',
  projectSlug: 'actions/checkout',
  releaseTag: 'v2',
  friendlyName: 'GitHub Checkout Action',
  description: 'Checks out a repository for workflow jobs.',
  permissions: {},
  releases: [],
  environment: {},
};
