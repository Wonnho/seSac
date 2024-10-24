// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubled);

// const strNumbers = ['1', '2', '3', '4'];
// console.log(parseInt('1'));
// console.log('1');

const strNumbers = ['1', '2', '3', '4'];
const numNumbers = [1, 2, 3, 4];

const initArr = [];
for (let strNum of strNumbers) {
  let initNum = parseInt(strNum);
  initArr.push(initNum);
}

console.log(initArr);

let initArray2 = strNumbers.map((num) => parseInt(num));
let initArray3 = strNumbers.map((num) => {
  return parseInt(num);
});

console.log('initArray2',initArray2)
console.log('initArray3',initArray3)
