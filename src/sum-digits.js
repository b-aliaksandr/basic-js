/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const calcSum = (num) => {
    let curNum = num;
    let digit;
    let sum = 0;

    while (curNum > 0) {
      digit = curNum % 10;
      curNum = Number.parseInt(curNum / 10);
      sum += digit;
    }
    return sum;
  };

  let currentSum = n;

  while (currentSum > 9) {
    currentSum = calcSum(currentSum);
  }

  return currentSum;
}

module.exports = {
  getSumOfDigits
};
