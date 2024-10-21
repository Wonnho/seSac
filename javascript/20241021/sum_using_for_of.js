const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let summ = 0;
for (let k in nums) {
  num = nums[k];

  summ = summ + num;
}
console.log(`total of nums is ${summ}`);

let total = 0;
for (const num of nums) {
  total += num;
}
console.log(`sum is ${total}`);

