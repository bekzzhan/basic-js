/* jshint esversion: 6 */
const chainMaker = {
  'result': [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value !== undefined){
      this.result.push(`( ${String(value)} )~~`);
    } else {
      this.result.push(`( )~~`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== "number" && position % 1 !== 0) {
      this.result.length = 0;
      throw Error;
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const resultStr = this.result.join('');
    this.result.length = 0;
    const out = resultStr.slice(0, resultStr.length - 2);
    return out;
  }
};

module.exports = chainMaker;
