/* jshint esversion: 6 */
module.exports = function repeater(str, options) {
if (typeof(str) !== 'string') {
  str = String(str);
}
let addition = options.addition;
if (typeof(options.addition) !== 'string') {
  addition = String(options.addition);
}
const num = () => {
  if (options.hasOwnProperty('repeatTimes')) {
    return options.repeatTimes;
  } else {
    return 1;
  }
};
const repeatsNum = num();
const addNum = () => {
  if (options.hasOwnProperty('additionRepeatTimes')) {
    return options.additionRepeatTimes;
  } else {
    return 1;
  }
};
const additionRepeatTimes = addNum();
const addAddition = (addition) => {
  if (options.hasOwnProperty('addition')) {
    result.push(addition);
  }
};
const addAdditionSeparator = () => {
  if (options.hasOwnProperty('additionSeparator')) {
    result.push(options.additionSeparator);
  } else {
    result.push('|');
  }
};
const addSeparator = () => {
  if (options.hasOwnProperty('separator')) {
    result.push(options.separator);
  } else {
    result.push('+');
  }
};
const result = [];
for (let i = 0; i < repeatsNum; i += 1) {
  result.push(str);
  for (let j = 0; j < additionRepeatTimes; j += 1) {
    addAddition(addition);
    if (j < additionRepeatTimes - 1) {
      addAdditionSeparator();
    }
  }
  if (i < repeatsNum - 1) {
    addSeparator();
  }
}
return result.join('');
};
  