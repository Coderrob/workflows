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
