/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowLen = matrix.length;
  const colLen = matrix.at(0)?.length || 0;

  const result = (Array.from({ length: rowLen }, () => Array(colLen).fill(0)));

  const incNeighborsTotal = (row, col) => {
    const [minRow, maxRow] = [row === 0 ? row : row - 1, row === rowLen - 1 ? row : row + 1];
    const [minCol, maxCol] = [col === 0 ? col : col - 1, col === colLen - 1 ? col : col + 1];

    for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex += 1) {
      for (let colIndex = minCol; colIndex <= maxCol; colIndex += 1) {
        if (row === rowIndex && col === colIndex) continue;
        const prevTotal = result[rowIndex][colIndex];
        result[rowIndex][colIndex] = prevTotal + 1;
      }
    }
  };

  for (let rowIndex = 0; rowIndex < rowLen; rowIndex += 1) {
    for (let colIndex = 0; colIndex < colLen; colIndex += 1) {
      const isMine = matrix[rowIndex][colIndex];
      if (isMine) {
        incNeighborsTotal(rowIndex, colIndex);
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
