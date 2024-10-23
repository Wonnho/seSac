const gugudan = [];

let a = 19;
let b = 19;
for (n = 1; n <= a; n++) {
  n_dan = [];
  for (let i = 1; i <=b; i++) {
    n_dan.push(n * i);
  }
 console.log('n_dan',n_dan)
  gugudan.push(n_dan);
}

console.log('Time Table:', gugudan);
