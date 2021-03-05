/* jshint esversion: 6 */
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / turnsSpeed * 3600);
  const result = {turns, seconds};
  return result;
};
