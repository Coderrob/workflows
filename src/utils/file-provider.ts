import YAML from 'js-yaml';
import * as Papa from 'papaparse';

export const DEFAULT_ENCODING: BufferEncoding = 'utf-8';

// JSON handler
export class JsonFormat<T> implements IFileProvider<T> {
  async load(filePath: string): Promise<IFileOperationResult<unknown>> {
    try {
      const content = fs.readFileSync(filePath, DEFAULT_ENCODING);
      return successfulResult(
        JSON.parse(content.toString()),
        `Loaded JSON successfully`
      );
    } catch (error) {
      return failedResult({
        status: OperationStatus.Failure,
        requires: FilePermission.Read,
        reason: error.message,
        encoding: DEFAULT_ENCODING,
      });
    }
  }

  async save(filePath: string, data: unknown): Promise<void> {
    try {
      fs.writeFileSync(
        filePath,
        JSON.stringify(data, null, 2),
        DEFAULT_ENCODING
      );
    } catch (error) {
      throw new Error(`Failed to write JSON file: ${error.message}`);
    }
  }
}

// YAML handler
export class YamlFormat implements IYAMLFormat {
  async load(filePath: string): Promise<IFileOperationResult<unknown>> {
    try {
      const content = fs.readFileSync(filePath, DEFAULT_ENCODING);
      return successfulResult(
        YAML.parse(content.toString()),
        `Loaded YAML successfully`
      );
    } catch (error) {
      return failedResult({
        status: OperationStatus.Failure,
        requires: FilePermission.Read,
        reason: error.message,
        encoding: DEFAULT_ENCODING,
      });
    }
  }

  async save(filePath: string, data: unknown): Promise<void> {
    try {
      fs.writeFileSync(filePath, YAML.stringify(data), DEFAULT_ENCODING);
    } catch (error) {
      throw new Error(`Failed to write YAML file: ${error.message}`);
    }
  }
}

// CSV handler
export class CsvFormat implements ICsvFormat {
  async load(filePath: string): Promise<IFileOperationResult<string[]>> {
    try {
      const content = fs.readFileSync(filePath, DEFAULT_ENCODING);
      return successfulResult(
        Papa.parse(content.toString(), { header: true }).data,
        `Loaded CSV successfully`
      );
    } catch (error) {
      return failedResult({
        status: OperationStatus.Failure,
        requires: FilePermission.Read,
        reason: error.message,
        encoding: DEFAULT_ENCODING,
      });
    }
  }

  async save(filePath: string, data: string[]): Promise<void> {
    try {
      fs.writeFileSync(filePath, Papa.unparse(data), DEFAULT_ENCODING);
    } catch (error) {
      throw new Error(`Failed to write CSV file: ${error.message}`);
    }
  }
}

// Directory operations
export class FolderOperations implements IFolderOperations {
  async ensureDirectoryExists(
    directoryPath: string
  ): Promise<IFileOperationResult<void>> {
    try {
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
        return successfulResult(
          undefined,
          `Created directory ${directoryPath}`
        );
      }
      return successfulResult(
        undefined,
        `Directory ${directoryPath} already exists`
      );
    } catch (error) {
      return failedResult({
        status: OperationStatus.Failure,
        requires: FilePermission.Read,
        reason: error.message,
        encoding: DEFAULT_ENCODING,
      });
    }
  }
}
