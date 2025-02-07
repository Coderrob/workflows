export enum OperationStatus {
  Success = 'success',
  Failure = 'failure',
}
export enum FilePermission {
  Read = 'read',
  Write = 'write',
}
export interface IFileSystemResult<T> {
  status: OperationStatus;
  requires: FilePermission;
  content?: T;
  reason?: string;
  encoding: BufferEncoding;
}

export interface IFileProvider<T> {
  load: (filePath: string) => Promise<IFileSystemResult<T>>;
  save: (filePath: string, data: T) => Promise<IFileSystemResult<T>>;
}

export interface IFolderOperations {
  ensureDirectoryExists(
    directoryPath: string
  ): Promise<IFileSystemResult<void>>;
}
