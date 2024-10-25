const nums = [1, 2, 3, 4, 5, 6, 7];
const mulNums = nums.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc * cur;
}, 1);

console.log(mulNums);

const reduce_result = nums.reduce((acc, el) => {
  return acc + el;
}, 0);

console.log('reduce result:', reduce_result);
