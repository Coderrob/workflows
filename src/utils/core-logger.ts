import { BaseLogger, ISettingsParam } from 'tslog';

export class CoreLogger<LogObj> extends BaseLogger<LogObj> {
  constructor(settings?: ISettingsParam<LogObj>, logObj?: LogObj) {
    super(settings, logObj, 5);
  }
}
