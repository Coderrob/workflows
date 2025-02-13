import { z } from 'zod';

/**
 * Defines the possible values for `ref_type` in the GitHub context.
 */
export const GitHubRefType = z
  .enum(['branch', 'tag'])
  .describe('The type of Git reference. Possible values: "branch", "tag".');

/**
 * Zod schema for the GitHub Context.
 */
export const GitHubContextSchema = z.object({
  action: z
    .string()
    .optional()
    .describe(
      'The name of the action currently running, or the ID of a composite action.'
    ),
  action_path: z
    .string()
    .optional()
    .describe('The path to the composite action file.'),
  actor: z
    .string()
    .describe(
      'The username of the person or app that initiated the workflow run.'
    ),
  actor_id: z
    .string()
    .describe('The unique ID of the actor that triggered the workflow.'),
  api_url: z.string().url().describe('The base URL of the GitHub API.'),
  base_ref: z
    .string()
    .nullable()
    .describe(
      'The base ref or target branch of the pull request in a workflow run, if applicable.'
    ),
  env: z
    .record(z.string())
    .describe(
      'A map of environment variables available in the workflow execution.'
    ),
  event: z
    .unknown()
    .describe(
      'The complete webhook event payload that triggered the workflow run.'
    ),
  event_name: z
    .string()
    .describe('The name of the event that triggered the workflow run.'),
  event_path: z
    .string()
    .nullable()
    .describe(
      'The path to the file containing the full event webhook payload.'
    ),
  graphql_url: z
    .string()
    .url()
    .describe('The base URL of the GitHub GraphQL API.'),
  head_ref: z
    .string()
    .nullable()
    .describe(
      'The head ref or source branch of the pull request in a workflow run, if applicable.'
    ),
  job: z
    .string()
    .describe('The ID of the current job running in the workflow.'),
  ref: z
    .string()
    .nullable()
    .describe(
      'The full git ref (e.g., refs/heads/main or refs/pull/42/merge) that triggered the workflow run.'
    ),
  ref_name: z
    .string()
    .describe(
      'The shortened ref name (e.g., "main", "feature-branch", or "v1.2.3").'
    ),
  ref_protected: z
    .boolean()
    .nullable()
    .describe('Indicates whether the ref name is a protected branch.'),
  ref_type: GitHubRefType,
  repository: z
    .string()
    .describe(
      'The owner and repository name in the format "owner/repository".'
    ),
  repository_id: z
    .string()
    .describe('The unique ID of the repository where the workflow is running.'),
  repository_owner: z
    .string()
    .describe('The username or organization name that owns the repository.'),
  repository_owner_id: z
    .string()
    .describe('The unique ID of the account that owns the repository.'),
  retention_days: z
    .number()
    .nullable()
    .describe(
      'The number of days the workflow run data is retained before deletion.'
    ),
  run_attempt: z
    .string()
    .describe('The current attempt number for the workflow run.'),
  run_id: z.string().describe('The unique ID of the workflow run.'),
  run_number: z
    .string()
    .describe('A unique number for each workflow run within a repository.'),
  server_url: z
    .string()
    .url()
    .describe(
      'The base URL of the GitHub instance (e.g., "https://github.com").'
    ),
  sha: z.string().describe('The commit SHA that triggered the workflow run.'),
  token: z
    .string()
    .optional()
    .describe('The GitHub Actions token used for authentication.'),
  workflow: z.string().describe('The name of the workflow being executed.'),
  workflow_ref: z
    .string()
    .describe(
      'The full reference to the workflow file, including the repository and branch.'
    ),
  workflow_sha: z.string().describe('The commit SHA for the workflow file.'),
  workspace: z
    .string()
    .describe(
      'The absolute path to the GitHub workspace where the repository is cloned.'
    ),
});

export type GitHubContext = z.infer<typeof GitHubContextSchema>;
