function compare(k, s) {
  if (k > s) {
    return k;
  } else if (k < s) {
    return s;
  } else {
    return null;
  }
}

let x1 = 200;
let x2 = 200;
compare(x1, x2);
console.log(compare(x1, x2));
