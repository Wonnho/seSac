let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// let oddNumbers = arr.filter((num) => num > 0 && num % 2 !== 0);

let oddNumbers = arr.filter(function (num) {
  return num > 0 && num % 2 !== 0;
});

console.log(oddNumbers);
