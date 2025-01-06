/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strOfNum = String(n);
  let maxDigit = -1;
  let i = 0;
  while (i < strOfNum.length) {
    const curDigit = Number(strOfNum.slice(0, i).concat(strOfNum.slice(i + 1)));
    if (maxDigit < curDigit) maxDigit = curDigit;
    i++;
  }
  return maxDigit;
}

module.exports = {
  deleteDigit
};
