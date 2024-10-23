const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const n = nums.length;
const m = nums[0].length;

let result;
let sum;

result = [];
for (let j = 0; j < 0; j++) {
  sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i][j];
  }

  result.push(sum);
}

console.log(result);
