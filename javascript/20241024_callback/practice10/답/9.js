let matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];

let new_matrix = matrix.filter((arr) => {
  let total = arr[0] + arr[1];
  return total % 2 === 0;
});

console.log(new_matrix);
