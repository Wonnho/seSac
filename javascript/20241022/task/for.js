const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//print out using "for"

for (let k = 0; k < nums.length; k++) {
  num = nums[k];
  console.log(`numbers in array, num, are ${num}`);
}

// 3 time table

for (let num = 1; num <= 9; num++) {
  console.log('3 단', num * 3);
}
const names = ['Jassica', 'Billy', 'Russ', 'Horocichov'];

for (let k = 0; k < names.length; k++) {
  name = names[k];
  console.log(`${k}: ${name}`);
}

const ages = [18, 28, 45, 77];

for (let k = 0; k < names.length; k++) {
  name = names[k];
  console.log(`${ages[k]}, ${name} `);
}

// sum
let summ = 0;
for (let k = 0; k < nums.length; k++) {
  num = nums[k];
  summ = num + summ;
}

console.log(`sum of all elements in nums are ${summ}`);
