export enum Platform {
  Android = 'android',
  Iphone = 'iphone',
  Other = '',
}

class EnvLib {
  private readonly _ua: string;

  private readonly _isAndroid: boolean;

  private readonly _isIOS: boolean;

  private readonly _platform: Platform;

  private readonly _isIOS12: boolean;

  private readonly _isWX: boolean;

  private readonly _tbsPlayerH5: boolean;

  constructor() {
    this._ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    this._isAndroid = this.has('Android');
    this._isIOS = ['iPhone', 'iPad', 'iPod'].some(this.has.bind(this));
    this._isIOS12 = this._isIOS && (parseInt(this._ua.match(/os\s+(\d+)/i)![1]) >= 12);
    // eslint-disable-next-line no-nested-ternary
    this._platform = this._isAndroid ? Platform.Android : (this._isIOS ? Platform.Iphone : Platform.Other);
    this._isWX = this.indexOf('MicroMessenger') > 0;
    let tbsPlayerH5 = false;
    if (this._isAndroid) {
      if (this.has('TBS/')) {
        const tbsVersion = this._ua.substr(this.indexOf('TBS/'), this.indexOf(' ')).split('/')[1];
        if (parseInt(tbsVersion) >= 36849) {
          tbsPlayerH5 = true;
        }
      }
    }
    this._tbsPlayerH5 = tbsPlayerH5;
  }

  get isAndroid(): boolean {
    return this._isAndroid;
  }

  get ua(): string {
    return this._ua;
  }

  get isIOS(): boolean {
    return this._isIOS;
  }

  get platform(): Platform {
    return this._platform;
  }

  get isIOS12(): boolean {
    return this._isIOS12;
  }

  get isWX(): boolean {
    return this._isWX;
  }

  get tbsPlayerH5(): boolean {
    return this._tbsPlayerH5;
  }

  get windowWidth() {
    return window.innerWidth;
  }

  get windowHeight() {
    return window.innerHeight;
  }

  get CS_URL() {
    return 'http://q.url.cn/s/6msTpXm?_type=wpa';
  }

  private has(key: string) {
    return this.indexOf(key) >= 0;
  }

  private indexOf(key: string) {
    return this._ua.indexOf(key);
  }
}

export default EnvLib;
