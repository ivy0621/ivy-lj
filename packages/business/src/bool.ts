export enum BooleanString {
  True = 'True',
  False = 'False',
}

class Bool {
  static readonly Value = BooleanString;

  /**
   * 是否是true
   * @param value
   */
  static isTrue(value: any) {
    return value === this.Value.True;
  }

  static isFalse(value: any) {
    return value === this.Value.False;
  }

  /**
   * 将boolean值转化为枚举值
   * @param bool
   */
  static booleanToBooleanString(bool: boolean): BooleanString {
    return bool ? this.Value.True : this.Value.False;
  }
}

export default Bool;
