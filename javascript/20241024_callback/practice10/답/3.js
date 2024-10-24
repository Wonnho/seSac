let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// let doubledArr = arr.map((num) => num * 2);

let doubledArr = arr.map(function (num) {
  return num * 2;
});

console.log(doubledArr);
