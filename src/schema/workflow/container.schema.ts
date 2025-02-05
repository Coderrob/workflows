import { z } from 'zod';

export const ContainerSchema = z
  .object({
    image: z.string().describe('The Docker image to use as the container.'),
    credentials: z
      .object({
        username: z.string().describe('Username for Docker registry.'),
        password: z.string().describe('Password for Docker registry.'),
      })
      .optional()
      .describe('Credentials for Docker registry.'),
    env: z
      .record(z.string())
      .optional()
      .describe('Environment variables for the container.'),
    ports: z
      .array(z.union([z.string(), z.number()]))
      .optional()
      .describe('Ports to expose on the container.'),
    volumes: z
      .array(z.string())
      .optional()
      .describe('Volumes to mount in the container.'),
    options: z
      .string()
      .optional()
      .describe('Additional Docker container options.'),
  })
  .describe('Container settings for a job.');
