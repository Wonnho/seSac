for (let k = 1; k <= 30; k++) {
  if (!(k % 2)) continue;
  if (!(k % 3)) continue;
  console.log('remainders excluding 2 or 3 multiples:', k);
}

for (let k = 1; k <= 30; k++) {
  if (k % 2) continue;
  if (k % 3) continue;
  console.log('remainders excluding 2 or 3 multiples:', k);
}
