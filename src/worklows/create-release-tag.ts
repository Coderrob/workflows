import { WorkflowType } from '../schema/workflow/workflow.js';

export const createReleaseTagWorkflow: WorkflowType = {
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
