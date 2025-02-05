import { z } from 'zod';

import { CPUArchitecture } from './CPUArchitecture';

export const ArchitectureSchema = z
  .nativeEnum(CPUArchitecture)
  .describe('The CPU architecture.');
