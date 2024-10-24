const matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];
new_mat = [];
for (arr of matrix) {
  let summ = 0;
  for (el of arr) {
    summ += el;
  }
  if (!(summ % 2)) {
    new_mat.push(arr);
  }
}

console.log('sum of all elements of 2D array:', new_mat);
