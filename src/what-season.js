/* jshint esversion: 6 */
module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw 'Error';
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const seasons = {
    '0': 'winter',
    '1': 'winter',
    '2': 'spring',
    '3': 'spring',
    '4': 'spring',
    '5': 'summer',
    '6': 'summer',
    '7': 'summer',
    '8': 'autumn',
    '9': 'autumn',
    '10': 'autumn',
    '11': 'winter'
  };
  if (day > 31) {
    throw 'Error';
  }
  return seasons[month];
};
