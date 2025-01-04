/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const repeatStr = (str, times, sep) => str.concat(sep).repeat(times - 1).concat(str);

function repeater(str, options) {
  const {
    addition,
    separator = '+',
    additionSeparator = '|',
    repeatTimes,
    additionRepeatTimes,
  } = options;

  return repeatStr(
    addition !== undefined ?
      String(str).concat(
        repeatStr(String(addition), additionRepeatTimes, additionSeparator)
      ) :
      String(str),
    repeatTimes,
    separator,
  );
}

module.exports = {
  repeater
};
