/* jshint esversion: 6 */
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = Number(sampleActivity);
  if (typeof(sampleActivity) !== 'string' || isNaN(activity / 2) || sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }
  const lnN0N = Math.log(MODERN_ACTIVITY / activity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.ceil(lnN0N / k);
  return t;
};