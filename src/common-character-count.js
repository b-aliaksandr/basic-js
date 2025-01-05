/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const [smallerStr, largerStr] = s1.length > s2.length ? [s2, s1] : [s2, s1];
  const chMap = new Map();

  for (let ch of smallerStr) {
    const amount = chMap.get(ch);
    chMap.set(ch, amount === undefined ? 1 : amount + 1);
  }

  let count = 0;

  for (let ch of largerStr) {
    const amount = chMap.get(ch);
    if (amount > 0) {
      count += 1;
      chMap.set(ch, amount - 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
