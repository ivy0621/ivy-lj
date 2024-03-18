/**
 * @author ivy
 * @date 2020/5/9
 * @Description:
 */
import { IConfig } from '../interfaces/config';
import { getConfig } from './globalConfig';

export const configure = (newConfig: Partial<IConfig>) => {
  Object.assign(getConfig(), newConfig);
};
