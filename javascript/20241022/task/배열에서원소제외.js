// match arr with array excluding notLog
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// array which is to be excluded
const notLog = [1, 4, 5, 7];

// logic
// is it in array, "notLog"?
//if in, do not print.

for (let k = 0; k < arr.length; k++) {
  for (let j = 0; j < notLog.length; j++) {
    if ( notLog[j]==arr[k]) { // 뒤에 오는 게 먼저 온거와 일치하는지 비교하는게 맞는 듯...
      console.log('notLog[k]',notLog[k])
      continue;
    }
  }
  console.log(`remaining set: ${arr[k]}`);
}

let num = 1;
