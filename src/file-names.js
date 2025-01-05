/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const existFileNames = new Map();

  for (const name of names) {
    const amount = existFileNames.get(name);
    if (amount >= 1) {
      const newName = name.concat(`(${amount})`);
      existFileNames.set(newName, 1);
    }
    existFileNames.set(name, amount === undefined ? 1 : amount + 1);
  }

  return Array.from(existFileNames.keys());
}

module.exports = {
  renameFiles
};
