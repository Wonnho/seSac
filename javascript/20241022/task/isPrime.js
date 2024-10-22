//7. 자연수 n이 주어졌을 때, n이 소수인지 판단하시오.

prime = 22;
let isPrime = true;
for (let k = 2; k < Math.sqrt(prime); k++) {
  if (prime % k === 0) {
    isPrime = false;
  }
}

console.log('Prime number', isPrime);
//2 is to be considered.
