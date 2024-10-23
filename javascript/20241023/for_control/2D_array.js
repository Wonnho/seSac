const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr;

for (let arr of nums) {
  for (let num of arr) {
    console.log(num);
  }
}

for (let i in nums) {
  let arr = nums[i];
  for (let j in arr) {
    let num = arr[j];
    console.log(num);
    console.log(arr[j]);
    console.log(nums[i][j]);
  }
}

const n = nums.length;
const m = nums[0].length;
for (let k = 0; k < n; k++) {
  for (let j = 0; j < m; j++) {
    console.log(nums[k][j]);
  }
}
