import { JobStep } from '../schema/workflow/job-step.js';

export const checkoutRepoStep: JobStep = {
  name: 'Checkout Repo',
  uses: 'actions/checkout@v2',
};
