// 1
const prompt = require('prompt-sync')({ sigint: true });
let num1 = parseInt(prompt('write random number'));
console.log('number entered:', num1);
if (num1 < 10) {
  console.log(`${num1} is less than ten`);
} else {
  console.log(`${num1} is greater than ten`);
}

// 2

if (num1 % 2 == 0) {
  console.log(`${num1} is even`);
} else {
  console.log(`${num1} is odd`);
}

// 3

if (typeof num1 == 'number') {
  console.log(`${num1} is a Number`);
} else {
  console.log(`${num1} is not a Number`);
}

if (num1 == 10) {
  console.log(`${num1} is as same as ten`);
} else if (num1 > 10) {
  console.log(`${num1} is greater than ten`);
} else {
  console.log(`${num1} is less than ten`);
}

// 4

let score = prompt('input a score:');

if (score >= 60) {
  console.log('pass');
} else {
  console.log('failed');
}

// 5

// 6

let number2 = prompt('write a random number');
let number = parseInt(number2);

if (typeof number == 'number') {
  console.log(`${number} is a Number`);
  if (number == 10) {
    console.log(`${number} is as same as ten`);
  } else if (number > 10) {
    console.log(`${number} is greater than ten`);
  } else {
    console.log(`${number} is less than ten`);
  }
} else {
  console.log(`${number} is not a Number`);
}

// alternatively
if (!isNaN(number)) {
  console.log(`${number} is a Number`);

  if (number == 10) {
    console.log(`${number} is as same as ten`);
  } else if (number > 10) {
    console.log(`${number} is greater than ten`);
  } else {
    console.log(`${number} is less than ten`);
  }
} else {
  console.log(`${number} is not a Number`);
}

// 7

if (number == 0) {
  console.log('입력한 수는', `${number}`);
} else if (number % 2 == 0) {
  console.log('even');
} else {
  console.log('odd');
}
