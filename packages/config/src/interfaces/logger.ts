/**
 * @author ivy
 * @date 2020/5/15
 * @Description:
 */

export interface Logger {
  log(...msg: any[]): void;

  info(...msg: any[]): void;

  warn(...msg: any[]): void;

  error(...msg: any[]): void;
}
