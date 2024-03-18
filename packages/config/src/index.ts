/**
 * @author ivy
 * @date 2020/5/8
 * @Description:
 */
import { config } from './core/config';
import { configure } from './core/configure';
import { IConfig } from './interfaces/config';
import { init } from './core/globalConfig';
import { getConfig } from './core/globalConfig';
import { Logger } from './interfaces/logger';

init(config);

export {
  IConfig,
  getConfig,
  configure,
  Logger
};
