const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let seq;

console.log('=============');
console.log('3단');
for (let k in nums) {
  seq = nums[k];
  // const seq = nums[k];
  three_3 = 3 * seq;

  console.log(`3*${seq} = ${three_3}`);
}



console.log('=============');


//  for iterable Object value만 뽑아오고 싶을 때
for (let num of nums) {
  console.log(`3*${seq} = ${three_3}`);
}