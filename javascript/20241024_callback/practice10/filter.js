arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

const odd = arr.filter((odd) => {
  return odd % 2 && odd > 0;
});

console.log('odd numbers:', odd);
