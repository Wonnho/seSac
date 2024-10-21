// 8
const username = 'starLink';
const password = 'Elon Musk';

if (username === 'starLink') {
  if (password === 'Elon Musk') {
    console.log('logon successfully');
  } else {
    console.log('password is incorrect');
  }
} else {
  console.log('logon failed');
}

// 9

let su1 = 34;
let su2 = 34;

console.log(`${su1}`);
console.log(`${su2}`);

if (su1 > su2) {
  console.log(`${su1} is a greater number`);
} else if (su1 < su2) {
  console.log(`${su2} is a greater number`);
} else {
  console.log(`${su1} is the same as ${su2}`);
}

// 10
let number_1 = 33;

console.log(`${number_1}`);

if (number_1 % 2 == 0 && number_1 % 3 == 0) {
  console.log(`${number_1} is a six mulitple`);
} else if (number_1 % 2 == 0 && number_1 % 3 != 0) {
  console.log(`${number_1} is a two mulitple`);
} else if (number_1 % 2 != 0 && number_1 % 3 == 0) {
  console.log(`${number_1} is a three mulitple`);
} else {
  console.log(`${number_1} is two nor three multiple`);
}
