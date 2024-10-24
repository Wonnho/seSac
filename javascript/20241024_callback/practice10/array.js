//1
arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

arr.forEach((ind) => {
  console.log(ind);
});

//2
// function gop(k) {
//   return k*arr
// }

// console.log('원소에 배수 곱하기',gop(2));

let arr2 = arr.map((ind) => {
  return 2 * ind;
});

console.log('array multiply', arr2);

const initArr = [];
for (let num of arr) {
  let initNum = parseInt(num);
  initArr.push(initNum);
}

console.log('새로운 리스트에 원소 입력하기:', initArr);

let initNum2=arr.map((num)=>parseInt(num));
let initNum3=arr.map((num)=>{
  return parseInt(num);
})

console.log('initNum2',initNum2);
console.log('initNum3',initNum3);


//3

