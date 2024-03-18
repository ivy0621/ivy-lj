/**
 * @author ivy
 * @date 2020/5/12
 * @Description:
 */
import { IConfig } from '../interfaces/config';
import win from 'global';

const isSupportSymbol = typeof Symbol !== 'undefined' && typeof Symbol.for === 'function';
const str = '@@lm__Config__key';
const globalKey: any = isSupportSymbol ? Symbol.for(str) : str;

export function init(config: IConfig) {
  if (!win[globalKey]) {
    win[globalKey] = config;
  }
}

export function getConfig(): IConfig {
  return win[globalKey];
}
