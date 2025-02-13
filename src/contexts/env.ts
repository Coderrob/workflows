import { z } from 'zod';

/**
 * Defines the possible values for `runner_arch` in the env context.
 */
export const RunnerArch = z
  .enum(['X86', 'X64', 'ARM', 'ARM64'])
  .describe(
    'The architecture of the runner executing the job. Possible values: X86, X64, ARM, ARM64.'
  );

/**
 * Defines the possible values for `runner_os` in the env context.
 */
export const RunnerOS = z
  .enum(['Linux', 'Windows', 'macOS'])
  .describe(
    'The operating system of the runner executing the job. Possible values: Linux, Windows, macOS.'
  );

/**
 * Zod schema for the GitHub Environment (env) Context.
 */
export const EnvContextSchema = z.object({
  CI: z
    .literal('true')
    .describe(
      'Indicates that the workflow is running in a continuous integration (CI) environment. Always "true".'
    ),
  GITHUB_ACTION: z
    .string()
    .describe(
      'The name of the action currently running, or the ID of a composite action.'
    ),
  GITHUB_ACTION_PATH: z
    .string()
    .optional()
    .describe(
      'The path where an action is located. Available only in composite actions.'
    ),
  GITHUB_ACTION_REPOSITORY: z
    .string()
    .optional()
    .describe(
      'The owner and repository name of the action being executed, if any.'
    ),
  GITHUB_ACTIONS: z
    .literal('true')
    .describe(
      'Always "true" to indicate that the workflow is running in GitHub Actions.'
    ),
  GITHUB_ACTOR: z
    .string()
    .describe(
      'The username of the person or app that initiated the workflow run.'
    ),
  GITHUB_ACTOR_ID: z
    .string()
    .describe('The ID of the actor who triggered the workflow.'),
  GITHUB_API_URL: z.string().url().describe('The URL of the GitHub API.'),
  GITHUB_BASE_REF: z
    .string()
    .nullable()
    .describe(
      'The base ref or target branch of the pull request in a workflow run, if applicable.'
    ),
  GITHUB_ENV: z
    .string()
    .describe('The path to the environment file for the job.'),
  GITHUB_EVENT_NAME: z
    .string()
    .describe('The name of the event that triggered the workflow run.'),
  GITHUB_EVENT_PATH: z
    .string()
    .describe('The path to the event payload file for the workflow run.'),
  GITHUB_GRAPHQL_URL: z
    .string()
    .url()
    .describe('The URL of the GitHub GraphQL API.'),
  GITHUB_HEAD_REF: z
    .string()
    .nullable()
    .describe(
      'The head ref or source branch of the pull request in a workflow run, if applicable.'
    ),
  GITHUB_JOB: z
    .string()
    .describe('The ID of the current job running in the workflow.'),
  GITHUB_OUTPUT: z
    .string()
    .describe(
      'The path to the output file used to share data between steps in a job.'
    ),
  GITHUB_PATH: z
    .string()
    .describe(
      'The path to the file containing system paths to be added to the `PATH` environment variable.'
    ),
  GITHUB_REF: z
    .string()
    .describe(
      'The full git ref (e.g., refs/heads/main or refs/pull/42/merge) that triggered the workflow run.'
    ),
  GITHUB_REF_NAME: z
    .string()
    .describe(
      'The shortened ref name (e.g., main, feature-branch, or v1.2.3).'
    ),
  GITHUB_REF_PROTECTED: z
    .boolean()
    .nullable()
    .describe('Indicates if the ref name is protected.'),
  GITHUB_REF_TYPE: z
    .enum(['branch', 'tag'])
    .describe('The type of Git reference. Possible values: branch, tag.'),
  GITHUB_REPOSITORY: z
    .string()
    .describe('The owner and repository name in the format owner/repository.'),
  GITHUB_REPOSITORY_ID: z
    .string()
    .describe('The unique ID of the repository where the workflow is running.'),
  GITHUB_REPOSITORY_OWNER: z
    .string()
    .describe('The account that owns the repository.'),
  GITHUB_REPOSITORY_OWNER_ID: z
    .string()
    .describe('The unique ID of the account that owns the repository.'),
  GITHUB_RETENTION_DAYS: z
    .number()
    .nullable()
    .describe(
      'The number of days the workflow run data is retained before being deleted.'
    ),
  GITHUB_RUN_ATTEMPT: z
    .string()
    .describe('The current attempt number for the workflow run.'),
  GITHUB_RUN_ID: z.string().describe('The unique ID of the workflow run.'),
  GITHUB_RUN_NUMBER: z
    .string()
    .describe('A unique number for each workflow run within a repository.'),
  GITHUB_SERVER_URL: z
    .string()
    .url()
    .describe('The URL of the GitHub instance (e.g., https://github.com).'),
  GITHUB_SHA: z
    .string()
    .describe('The commit SHA that triggered the workflow run.'),
  GITHUB_STEP_SUMMARY: z
    .string()
    .describe(
      'The path to the step summary file for adding markdown summaries in logs.'
    ),
  GITHUB_WORKFLOW: z
    .string()
    .describe('The name of the workflow being executed.'),
  GITHUB_WORKFLOW_REF: z
    .string()
    .describe('The full reference to the workflow file.'),
  GITHUB_WORKFLOW_SHA: z
    .string()
    .describe('The commit SHA for the workflow file.'),
  GITHUB_WORKSPACE: z
    .string()
    .describe(
      'The absolute path to the GitHub workspace where the repository is cloned.'
    ),
  RUNNER_ARCH: RunnerArch,
  RUNNER_ENVIRONMENT: z
    .string()
    .describe('The name of the environment where the runner is running.'),
  RUNNER_NAME: z.string().describe('The name of the runner executing the job.'),
  RUNNER_OS: RunnerOS,
  RUNNER_TEMP: z
    .string()
    .describe(
      'The path to a temporary directory on the runner for storing temporary files.'
    ),
  RUNNER_TOOL_CACHE: z
    .string()
    .describe(
      'The path to the directory containing installed tools for the runner.'
    ),
});

export type EnvContext = z.infer<typeof EnvContextSchema>;
