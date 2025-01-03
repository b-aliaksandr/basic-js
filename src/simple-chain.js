/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  separator: '~~',
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.value.push('');
    } else {
      this.chain.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      this.chain[position - 1] === undefined
    ) {
      this.resetChain();
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain
      .map((item) => (`( ${item} )`))
      .join(this.separator);

    this.resetChain();
    return result;
  },
  resetChain() {
    this.chain.length = 0;
    this.chain = [];
  }
};

module.exports = {
  chainMaker
};
