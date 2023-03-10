export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
