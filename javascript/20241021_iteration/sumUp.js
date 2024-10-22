const nums = [10, 6, 8, 5, 4];

// sum
let total = 0;
for (const num of nums) {
  total += num;
}

console.log(`sum is ${total}`);

//find min
minValue = Infinity;

for (num of nums) {
  if (minValue > num) {
    console.log('min value:', minValue);
    console.log('num', num);
    minValue = num;
    console.log('minimal value:', minValue);
  }
}

console.log(`minimal value is ${minValue} in nums Array`);

// reverse value in Array,nums

reverseList = [];

for (let k = nums.length - 1; k >= 0; k--) {
  reverseList.push(nums[k]);
  console.log(reverseList);
}

console.log('reverse value in nums', reverseList);

const names = ['jun', 'Linda', 'beemo', 'Horis'];

for (let k in names) {
  let name = names[k];
  console.log(`${parseInt(k) + 1}번: ${name}`);
}
names.delete(2)