import { JobStepType } from '../../schema/workflow/job-step';

export const checkoutJobStep: JobStepType = {
  name: 'Checkout Repo',
  uses: 'actions/checkout@v2',
};
