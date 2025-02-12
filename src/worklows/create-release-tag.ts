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
import { Workflow } from '../schema/workflow/workflow.js';

export const createReleaseTagWorkflow: Workflow = {
  name: 'Create Release Tag',
  on: {
    workflow_call: {},
    push: {
      branches: ['main'],
    },
  },
  concurrency: {
    group: '${{ github.workflow }}-${{ github.head_ref || github.ref_name }}',
    'cancel-in-progress': false,
  },
  jobs: {
    createReleaseTag: {
      name: 'Create Release Tag',
      'runs-on': 'ubuntu-latest',
      permissions: 'write-all',
      env: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
      },
      steps: [
        {
          name: 'Checkout source',
          uses: 'actions/checkout@v4',
        },
        {
          name: 'Create release tag',
          id: 'tag-release',
          uses: 'actions/create-tag@v1',
        },
      ],
    },
  },
};
