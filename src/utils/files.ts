import fs from 'fs';
import { isError } from './guards.js';

export const DEFAULT_ENCODING: BufferEncoding = 'utf-8';

enum OperationStatus {
  Success = 'success',
  Failure = 'failure',
}

interface IFileOperationResult<T> {
  status: OperationStatus;
  requires: FilePermission;
  content?: T;
  reason?: string;
  encoding: BufferEncoding;
}

export function loadJSON<T>(
  filePath: string,
  defaultValue: T
): IFileOperationResult<T> {
  try {
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, DEFAULT_ENCODING));
      return successfulResult(content, `File read successfully`);
    }
    return {
      status: OperationStatus.Success,
      requires: FilePermission.Read,
      content: defaultValue,
      reason: 'File does not exist.',
      encoding: DEFAULT_ENCODING,
    };
  } catch (error) {
    const message = isError(error)
      ? error.message
      : 'Unknown error reading from file.';
    return failedToRead(
      `Failed to create directory for file ${filePath}: ${message}`,
      defaultValue
    );
  }
}

export function saveJSON<T>(
  filePath: string,
  data: T
): IFileOperationResult<void> {
  try {
    const result = createDirectory(filePath, true);
    if (result.status !== OperationStatus.Success) {
      return result;
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), DEFAULT_ENCODING);
    return writeSuccessfulResult(undefined, `Saved JSON to file ${filePath}.`);
  } catch (error) {
    const message = isError(error)
      ? error.message
      : 'Failed to save JSON to file.';
    return failedToWrite(
      `Failed to create directory for file ${filePath}: ${message}`
    );
  }
}

export function createDirectory(
  dirPath: string,
  recursive = true
): IFileOperationResult<void> {
  try {
    // todo: check if dir exists and is writable.
    // todo: check if dirPath is empty
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive });
      writeSuccessfulResult(
        undefined,
        `Directory ${dirPath} created successfully.`
      );
    }
    return successfulResult(undefined, `Directory ${dirPath} already exists.`);
  } catch (error) {
    const message = isError(error)
      ? error.message
      : 'Failed to created directory.';
    return failedToWrite(`Error creating directory for file: ${message}`);
  }
}

function failedToRead<T>(
  reason: string,
  defaultValue?: T
): IFileOperationResult<T> {
  return failedResult(`Read operation failed: ${reason}`);
  return {
    status: OperationStatus.Failure,
    requires: FilePermission.Read,
    content: defaultValue,
    reason: `Read operation failed: ${reason}`,
    encoding: DEFAULT_ENCODING,
  };
}

function failedToWrite(reason: string): IFileOperationResult<void> {
  return failedResult({
    `Write operation failed: ${reason}`,
    FilePermission.Write
  );
}

function failedResult<T>({
  status,
  requires,
  reason,
  encoding,
}: {
  status: OperationStatus;
  requires: FilePermission;
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

function writeSuccessfulResult<T>(content: T, reason: string) {
  return successfulResult<T>(content, reason);
}

function successfulResult<T>(
  content: T,
  reason: string,
  requires: FilePermission = FilePermission.Read
): IFileOperationResult<T> {
  return {
    content,
    status: OperationStatus.Success,
    requires,
    reason,
    encoding: DEFAULT_ENCODING,
  };
}
