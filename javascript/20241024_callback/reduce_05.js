const nums = [1, 2, 3, 4, 5, 6, 7];
const mulNums = nums.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc * cur;
}, 1);

console.log(mulNums);
