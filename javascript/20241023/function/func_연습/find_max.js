// const maxNumber = (arr) => {
//   return Math.max(...arr);
// };
// arr = [10, 25, 36, 99, 58];

// maxNumber(arr);
// console.log(maxNumber(arr));

// const _ = require('lodash');
// const maxNumber = (arr) => {
//   return _.max(arr);
// };

// const arr = [10, 25, 36, 99, 58];

// console.log(maxNumber(arr));

// const standardDeviation = (arr) => {
//   const mean = _.mean(arr);
//   const variance = _.mean(arr.map(num => Math.pow(num - mean, 2)));
//   return Math.sqrt(variance);
// };

// console.log('standard deviation',standardDeviation(arr))

function find_max(arr) {
  let max = -Infinity;
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const arr = [10, 25, 36, 99, 58];

console.log('find max', find_max(arr));
