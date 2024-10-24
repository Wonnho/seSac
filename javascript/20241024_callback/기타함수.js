let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr4 = arr;
console.log(`arr4 &{arr4}`); //에레이는 template literal을 먹히지 않네
console.log('arr4', arr);
arr4[1] = 100;
console.log('modified arr4:', arr4);
console.log('check if arr is influenced or not: ', arr);
