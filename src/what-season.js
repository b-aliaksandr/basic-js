/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const SEASONS = {
  'spring': 'spring',
  'summer': 'summer',
  'autumn': 'autumn',
  'winter': 'winter',
};
const NotPassedArgumentMsg = 'Unable to determine the time of year!';
const InvalidErrorMsg = 'Invalid date!';

function getSeason(date) {
  if (date === undefined) {
    return NotPassedArgumentMsg;
  }

  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== '[object Date]' ||
    Object.keys(date).length > 0
  ) {
    throw new Error(InvalidErrorMsg);
  }

  const monthIndex = date.getMonth();

  if ((monthIndex >= 0 && monthIndex <= 1) || monthIndex === 11) return SEASONS.winter;
  if (monthIndex <= 4) return SEASONS.spring;
  if (monthIndex <= 7) return SEASONS.summer;
  if (monthIndex <= 10) return SEASONS.autumn;
}

module.exports = {
  getSeason
};
