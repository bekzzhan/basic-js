/* jshint esversion: 6 */
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const arr = [];
  for (let item of members) {
    if (typeof(item) === 'string') {
      item = item.split(' ').join('');
      const letter = item[0].toUpperCase();
      arr.push(letter);
    }
  }
  if (arr.length === 0) {
    return false;
  }
  const sortedArr = arr.sort();
  return sortedArr.join('');
};
