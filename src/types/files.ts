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
export enum OperationStatus {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export enum FilePermission {
  READ = 'read',
  WRITE = 'write',
}

export interface IFileSystemResult<T> {
  status: OperationStatus;
  requires?: FilePermission;
  content?: T;
  reason?: string;
  encoding?: BufferEncoding;
}

export interface IFileProvider<T> {
  load: (filePath: string, defaultValue?: T) => Promise<IFileSystemResult<T>>;
  save: (filePath: string, data: T) => Promise<IFileSystemResult<T>>;
}

export interface IFolderOperations {
  ensureDirectoryExists(
    directoryPath: string
  ): Promise<IFileSystemResult<void>>;
}
