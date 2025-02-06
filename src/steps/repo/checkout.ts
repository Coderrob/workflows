import { JobStepType } from '../../schema/workflow/job-step.js';

export const checkoutJobStep: JobStepType = {
  name: 'Checkout Repo',
  uses: 'actions/checkout@v2',
};
