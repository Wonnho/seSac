const score = 55;
if (score >= 90) {
  console.log('A');
  if (score == 100) {
    console.log('prof likes you a lot');
  }
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
  if (score < 40) {
    console.log('Warning!!!!');
  }
}
