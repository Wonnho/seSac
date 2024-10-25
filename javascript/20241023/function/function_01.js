function plus(num) {
  let plusOneNumber = num + 1;
  return plusOneNumber;
}

let x = 10;
let y = plus(x);

// two timeTable
function two_time(n) {
  for (let k = 1; k < 10; k++) {
    let two = 2 * k;
  }
  return two;
}

//wether or not number is prime
function isPrime(prime) {
  let isPrime = true;
  for (let k = 2; k < prime; k++) {
    if (prime % k === 0) {
      isPrime = false;
      return isPrime;
    }
  }
  return isPrime;
}

// nth timeTable
function timeTable(n) {
  for (let k = 1; k < 10; k++) return n * k;
}

function nDan(n) {
  let n_dan = [];
  for (let k = 1; k < 10; k++) {
    n_dan.push(n * k);
  }
  return n_dan;
}

console.log(nDan(3));

function add(a,b) {
  return a+b;
}

console.log(add(a=4,b=13))


function sum(nums) {
  console.log(nums)
}

sum([1,2,3,4])