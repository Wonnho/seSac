let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// let firstFiveIndex = arr.findIndex((num) => num === 5);

let firstFiveIndex = arr.findIndex(function (num) {
  return num === 5;
});

console.log(firstFiveIndex);
