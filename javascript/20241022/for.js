for (let k = 1; k <= 9; k++) {
  console.log(k);
}

const arr = [2, 3, 5, 1, 3];

while (arr.length > 0) {
  el = arr.pop();
  console.log(el);
}

while(arr.length>0) {
  el=arr.shift();
  console.log(el)
}

while(arr.length>0) {
  el=arr.unshift();
  console.log(el)
}

for (let k = 0; arr.length > k; k++) {
  el = arr[k];
  console.log(el);
}

while (arr.length) {
  el = arr.pop();
  console.log(el);
}

if ([]) {
  console.log('empty array in javascript is defined to be true');
}
