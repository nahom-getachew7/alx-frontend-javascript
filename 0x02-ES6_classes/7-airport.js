export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}

Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};
