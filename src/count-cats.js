/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const EARS_CH = '^^';

function countCats(matrix) {
  return matrix.reduce((foundCats, item) => {
    if (Array.isArray(item)) {
      return foundCats += countCats(item);
    }
    if (item === EARS_CH) foundCats += 1;
    return foundCats;
  }, 0);
}

module.exports = {
  countCats
};
