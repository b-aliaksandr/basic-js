/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const isTwoHexadecimalDigits = (value) => {
    return Number.isInteger(Number.parseInt(`0x${value.toUpperCase()}`, 16))
  };
  const groups = n.split('-');

  if (groups.length !== 6) return false;

  for (let group of groups) {
    if (!isTwoHexadecimalDigits(group)) return false;
  }

  return true;
}
module.exports = {
  isMAC48Address
};
