let money = true;
let phontiac = true;

// if (money && phontiac) {
//   console.log('false');
// } else if (money && !phontiac) {
//   console.log('true');
// } else if (!money && phontiac) {
//   console.log('ture');
// } else {
//   console.log('false');
// }

console.log((money || phontiac) && !(money || phontiac));
