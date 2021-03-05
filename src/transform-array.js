/* jshint esversion: 6 */
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  const result = arr.slice(0);
  const controlSequences = () => {
    for (let i = 0; i < result.length; i += 1) {
      if (result[i] === '--discard-next' && i !== result.length - 1) {
        result.splice(i + 1, 1);
      }
      if (result[i] === '--discard-prev' && i !== 0) {
        result.splice(i - 1, 1);
      }
      if (result[i] === '--double-next' && i !== result.length - 1) {
        result[i] = result[i + 1];
      }
      if (result[i] === '--double-prev' && i !== 0) {
        result[i] = result[i - 1];
      }
    }
  };
  const deleteSequences = () => {
    for (let i = 0; i < result.length; i += 1) {
      if (result[i] === '--discard-next' || result[i] === '--discard-prev' || result[i] === '--double-next' || result[i] === '--double-prev') {
        result.splice(i, 1);
      }
    }
  };
  controlSequences();
  deleteSequences();
  deleteSequences();
  deleteSequences();
  deleteSequences();
  deleteSequences();

  return result;
};
