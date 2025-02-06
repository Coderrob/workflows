import { z } from 'zod';
import { CPUArchitecture } from '../../types/cpu-architecture.js';

export const ArchitectureSchema = z
  .nativeEnum(CPUArchitecture)
  .describe('The CPU architecture.');
