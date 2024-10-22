const nums = [10, 6, 8, 5, 4];

const reverseNum = [];
// for (num of nums) {
//   reverseNum.unshift(num);
// }

// console.log(reverseNum);

for (let k = nums.length - 1; k >= 0; k--) {
  reverseNum.push(nums[k]);
  console.log(reverseNum);
}

console.log(reverseNum);
