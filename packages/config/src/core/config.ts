import { IConfig } from '../interfaces/config';
import { Logger } from '../interfaces/logger';

let log: Logger | undefined;

export const config: IConfig = {
  isProduction: true,
  cdnPrefix: '',
  unRegisterUserSessionPrefix: 'G_',
  get logger() {
    return log || console;
  },
  set logger(newLog: Logger) {
    log = newLog;
  },
  requestSecretHeaderName: '',
  pullLiveCenterDomain: '',
};
