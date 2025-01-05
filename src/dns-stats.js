/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const statsMap = new Map();
  domains.forEach((domain) => {
    const parts = domain.split('.').reverse().map((item) => '.'.concat(item));
    let str = '';

    for (let part of parts) {
      str = str.concat(part);
      const amount = statsMap.get(str);
      statsMap.set(str, amount === undefined ? 1 : amount + 1);
    }
  });

  return Object.fromEntries(statsMap.entries());
}

module.exports = {
  getDNSStats
};
