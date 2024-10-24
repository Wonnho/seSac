const matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];

// const second_el = matrix.findIndex((index) => {
//   return index[1];
// });

const second_el = matrix.map((second) => {
  return second[1];
});
console.log('second element of each array of matrix', second_el);

const second=matrix.forEach((index)=>{
  console.log('배열안의 배열의 두번째 원소:',index[1])
})