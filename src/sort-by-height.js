/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredArr = arr.filter((num) => num !== -1).sort((a, b) => a - b);
  const result = [];
  let count = 0;

  for (const item of arr) {
    if (item === -1) {
      result.push(item);
    } else {
      result.push(filteredArr[count]);
      count += 1;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
