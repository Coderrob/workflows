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
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';
import papa from 'papaparse';
import { isError } from './guards.js';
import {
  FilePermission,
  OperationStatus,
  IFileSystemResult,
  IFileProvider,
} from '../types/files.js';

export const DEFAULT_ENCODING: BufferEncoding = 'utf-8';

/**
 * Abstract class providing base functionality for file operations.
 */
abstract class FileProvider<T> implements IFileProvider<T> {
  abstract parse(content: string): T;
  abstract serialize(data: T): string;

  async load(
    filePath: string,
    defaultValue?: T
  ): Promise<IFileSystemResult<T>> {
    try {
      await this.ensureDirectoryExists(path.dirname(filePath));
      const content = await fs.readFile(filePath, DEFAULT_ENCODING);
      return this.successfulResult({
        content: this.parse(content),
        reason: `File ${filePath} read successfully`,
      });
    } catch (error) {
      return this.failedToRead({ error, defaultValue });
    }
  }

  async save(
    filePath: string,
    data: T,
    options = { encoding: DEFAULT_ENCODING }
  ): Promise<IFileSystemResult<T>> {
    try {
      await this.ensureDirectoryExists(path.dirname(filePath));
      await fs.writeFile(filePath, this.serialize(data), options.encoding);
      return this.successfulResult({
        reason: `Saved file ${filePath} successfully.`,
      });
    } catch (error) {
      return this.failedToWrite({ error });
    }
  }

  private async ensureDirectoryExists(directoryPath: string): Promise<void> {
    try {
      await fs.mkdir(directoryPath, { recursive: true });
    } catch (error) {
      throw new Error(`Failed to create directory ${directoryPath}: ${error}`);
    }
  }

  private failedToRead({
    error,
    defaultValue,
  }: {
    error: unknown;
    defaultValue?: T;
  }): IFileSystemResult<T> {
    return {
      status: OperationStatus.FAILURE,
      requires: FilePermission.READ,
      data: defaultValue,
      reason: `Read operation failed: ${isError(error) ? error.message : 'Unknown error'}`,
      encoding: DEFAULT_ENCODING,
    };
  }

  private failedToWrite({ error }: { error: unknown }): IFileSystemResult<T> {
    return {
      status: OperationStatus.FAILURE,
      requires: FilePermission.WRITE,
      reason: `Write operation failed: ${isError(error) ? error.message : 'Unknown error'}`,
    };
  }

  private successfulResult<T>({
    content,
    reason,
  }: {
    content?: T | undefined;
    reason: string;
  }): IFileSystemResult<T> {
    return {
      status: OperationStatus.SUCCESS,
      requires:
        content !== undefined ? FilePermission.READ : FilePermission.WRITE,
      data: content,
      reason,
      encoding: DEFAULT_ENCODING,
    };
  }
}

/**
 * JSON file provider implementing FileProvider.
 */
export class JsonFileProvider<T> extends FileProvider<T> {
  parse(content: string): T {
    return JSON.parse(content);
  }

  serialize(data: T): string {
    return JSON.stringify(data, null, 2);
  }
}

/**
 * YAML file provider implementing FileProvider.
 */
export class YamlFileProvider<T> extends FileProvider<T> {
  parse(content: string): T {
    return yaml.load(content, { json: true }) as T;
  }

  serialize(
    data: T,
    {
      condenseFlow = false,
      indent = 2,
      sortKeys = false,
    }: { sortKeys?: boolean; condenseFlow?: boolean; indent?: number } = {}
  ): string {
    return yaml.dump(data, { sortKeys, condenseFlow, indent });
  }
}

export class CsvFileProvider extends FileProvider<string[]> {
  parse(
    content: string,
    {
      header = false,
      delimiter = ',',
      skipEmptyLines = true,
    }: { header?: boolean; delimiter?: string; skipEmptyLines?: boolean } = {}
  ): string[] {
    return papa.parse(content, { header, delimiter, skipEmptyLines })
      .data as string[];
  }

  serialize(data: string[]): string {
    return papa.unparse(data);
  }
}

/**
 * Factory function to retrieve a file provider based on extension.
 */
export function getFileProvider<T>(filePath: string): FileProvider<T> {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.json':
      return new JsonFileProvider();
    case '.yaml':
    case '.yml':
      return new YamlFileProvider();
    default:
      throw new Error(`Unsupported file extension: ${ext}`);
  }
}
