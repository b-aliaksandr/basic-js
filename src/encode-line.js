/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let curCh = str.charAt(0);
  let curAmount = 0;
  const arr = [];

  for (let ch of str) {
    if (curCh !== ch) {
      arr.push(`${curAmount > 1 ? curAmount : ''}${curCh}`);
      curAmount = 0;
      curCh = ch;
    }
    curAmount += 1;
  }

  arr.push(`${curAmount > 1 ? curAmount : ''}${curCh}`);

  return arr.join('');
}

module.exports = {
  encodeLine
};
