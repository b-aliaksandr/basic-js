/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const mustBeArrayErrorMsg = `'arr' parameter must be an instance of the Array!`;
const CONTROL_SEQUENCES_NAME = {
  '--discard-next': '--discard-next',
  '--discard-prev': '--discard-prev',
  '--double-next': '--double-next',
  '--double-prev': '--double-prev',
};

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(mustBeArrayErrorMsg);

  const transformedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const nextItem = arr[i + 1];
    const prevItem = arr[i - 1];
    const transformedLastItem = transformedArr[transformedArr.length - 1];

    if (item === CONTROL_SEQUENCES_NAME['--discard-next']) {
      if (nextItem) {
        i += 1;
      }
    } else if (item === CONTROL_SEQUENCES_NAME['--discard-prev']) {
      if (transformedLastItem && transformedLastItem === prevItem) {
        transformedArr.pop();
      }
    } else if (item === CONTROL_SEQUENCES_NAME['--double-next']) {
      if (nextItem) {
        transformedArr.push(nextItem, nextItem);
        i += 1;
      }
    } else if (item === CONTROL_SEQUENCES_NAME['--double-prev']) {
      if (transformedLastItem && transformedLastItem === prevItem) {
        transformedArr.push(transformedLastItem);
      }
    } else {
      transformedArr.push(item);
    }
  }

  return transformedArr;
}

module.exports = {
  transform
};
