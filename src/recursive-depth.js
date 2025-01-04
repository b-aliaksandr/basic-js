/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;

    for (let item of arr) {
      if (Array.isArray(item)) {
        const nestedCount = this.calculateDepth(item) + 1;
        if (count < nestedCount) {
          count = nestedCount;
        }
      }
    }

    return count === 0 ? 1 : count;
  }
}

module.exports = {
  DepthCalculator
};
