for (let k = 0; k < 10; k++) {
  if (k % 2) {
    continue;
  }

  console.log(k);
}

for(let s=0;s<10;s=s+2) {
  console.log(s)
  if(s==9) break
}