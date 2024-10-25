// const even = (arr) => {
//   new_arr = [];

//   arr.forEach(num => {
 
//   if (!(num % 2)) {
//     new_arr.push(num);
//   }
// });
//   return new_arr;
// };

// const arr = [10, 25, 36, 99, 58];

// console.log('even numbers:', even(arr));

function evenNumber(arr) {
  let new_arr=[];
  for(const num of arr) {
    if(!(num%2)) new_arr.push(num);
  }
  return new_arr;
}

 const arr = [10, 25, 36, 99, 58];
 console.log('even Number:',evenNumber(arr))