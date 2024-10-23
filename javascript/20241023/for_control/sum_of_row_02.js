// make a list,[6,15,24]

const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const n = nums.length;
const m = nums[0].length;

let list_box = [];
for (let k = 0; k < n; k++) {
  let row_sum = 0;
  for (let j = 0; j < m; j++) {
    row_sum += nums[k][j];
  }
  list_box.push(row_sum);
}
console.log('list in row sum:', list_box);

//lecture's
let summ = 0;
let result = [];
for (let k = 0; k < n; k++) {
  for (let j = 0; j < m; j++) {
    summ += nums[k][j];
  }
  result.push(summ);
}
console.log('sum of elements of 2D array', summ);
console.log(' 2D array', result);

// 2.모든 원소들의 합을 구하시오
// 1 + 2 + 3 + 4 ... + 9

let summ2 = 0;
let total2 = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    summ2 += nums[i][j];
  }
  total2.push(summ); //redundant empty list
}

console.log('sum of all elements in nums:', total2);
console.log('sum of all elements in nums:', summ2);

// lecture's
let total = 0;
for (let arr of nums) {
  for (let num of arr) {
    total += num;
  }
}

console.log('another loop using for ..of:',total)