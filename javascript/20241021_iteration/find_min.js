// find minimal value

const num_arr = [10, 6, 8, 5, 4, 2, 3, 11];

//first trial
// console.log('minimal value:', Math.min(...num_arr));

//second trial
// let min_value;
// for (let k of num_arr) {
//   if (num_arr[k] > num_arr[k + 1]) {
//     console.log(`min:${num_arr[k + 1]}`);
//     min_value = num_arr[k + 1];
//   } else {
//     console.log('min', num_arr[k]);
//   }
// }

// console.log('min:', min_value);

let minNum = Infinity;

// for (num of num_arr) {
//   if (minNum > num) {
//     minNum = num;
//   }
// }

// console.log(`min value:${minNum}`);

for (let num of num_arr) {
  console.log('initial value');
  console.log(`min value:${minNum}`);
  console.log(`num:${num}`);
  if (minNum > num) {
    minNum = num;
  }

  console.log('result');
  console.log(`min value:${minNum}`);
  console.log();
}
