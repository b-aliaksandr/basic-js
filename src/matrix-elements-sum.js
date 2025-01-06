/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, arr, rowIndex) => {
    if (rowIndex === 0) {
      return sum + arr.reduce((acc, num) => acc + num, 0);
    }
    return sum + arr.reduce((acc, num, index) => {
      return matrix[rowIndex - 1][index] !== 0 ? acc + num: acc;
    }, 0)
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
