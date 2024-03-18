/**
 * @author ivy
 * @date 2020/5/8
 * @Description:
 */
import { Logger } from './logger';

export interface IConfig {
  /** cdn前缀 */
  cdnPrefix: string;
  /** 是否是线上环境 */
  isProduction: boolean;
  /** 未登录用户的session前缀 作为游客session使用 */
  unRegisterUserSessionPrefix: string,
  /** 书写日志 默认就是console 如果需要修改就可以改 */
  logger: Logger;
  /** 请求的加密请求头的key */
  requestSecretHeaderName: string;
  /** 拉流地址的中间地址 */
  pullLiveCenterDomain: string;
}
