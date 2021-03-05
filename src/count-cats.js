/* jshint esversion: 6 */
module.exports = function countCats(arr) {
  let count = 0;
  for (const item of arr) {
    for (const value of item) {
      if (value === '^^') {
        count += 1;
      }
    }
  }
  return count;
};
