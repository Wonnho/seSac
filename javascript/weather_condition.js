const prompt = require('prompt-sync')({ sigint: true });
let index = prompt('미세먼지 농도가 어떤가요?');
console.log(index);

if (index >= 251) {
  console.log('very bad');
} else if (index >= 101) {
  console.log('bad');
} else if (index >= 51) {
  console.log('normal');
} else if (index >= 0) {
  console.log('good');
} else {
  console.log('wrong');
}
