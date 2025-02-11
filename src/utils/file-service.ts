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
import {
  IFileProvider,
  IFileSystemResult,
  IFolderOperations,
} from '../types/files.js';

export class FileService {
  private json: IFileProvider;
  private yaml: IYAMLFormat;
  private csv: ICsvFormat;
  private folderOps: IFolderOperations;

  constructor() {
    this.json = new JsonFormat();
    this.yaml = new YamlFormat();
    this.csv = new CsvFormat();
    this.folderOps = new FolderOperations();
  }

  async load(
    filePath: string,
    format: 'json' | 'yaml' | 'csv'
  ): Promise<IFileSystemResult<unknown>> {
    switch (format) {
      case 'json':
        return this.json.load(filePath);
      case 'yaml':
        return this.yaml.load(filePath);
      case 'csv':
        const csvData = await this.csv.load(filePath);
        if (csvData.status === OperationStatus.Success) {
          // Convert CSV result to a generic type for consistency
          csvData.content = Object.values(csvData.content[0]); // Simplified conversion, depends on structure.
        }
        return csvData;
      default:
        throw new Error(`Unsupported file format: ${format}`);
    }
  }

  async save(
    filePath: string,
    data: unknown | string[],
    format: 'json' | 'yaml' | 'csv'
  ): Promise<IFileOperationResult<void>> {
    await this.folderOps.ensureDirectoryExists(path.dirname(filePath));

    switch (format) {
      case 'json':
        return this.json.save(filePath, data);
      case 'yaml':
        return this.yaml.save(filePath, data);
      case 'csv':
        return this.csv.save(filePath, data as string[]);
      default:
        throw new Error(`Unsupported file format: ${format}`);
    }
  }

  private successfulResult<T>(
    content?: T,
    reason: string = '',
    requires?: Permissions
  ): IFileOperationResult<T> {
    return {
      status: OperationStatus.Success,
      content,
      requires,
      reason,
      encoding: DEFAULT_ENCODING,
    };
  }

  private failedResult<T>({
    status,
    requires,
    reason,
    encoding,
  }: {
    status: OperationStatus;
    requires?: Permissions;
    reason: string;
    encoding: BufferEncoding;
  }): IFileOperationResult<T> {
    return {
      status,
      requires,
      reason,
      encoding,
    };
  }
}
