const nums=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const n = nums.length;
const m = nums[0].length;

let row_sum=0;
for(let k=0;k<n;k++) {
    row_sum+=row_sum+nums[k];
  }
console.log('row sum',row_sum)

//lecture's
let summ=0
let result=[]
for(let k=0;k<n;k++) {
  for(let j=0;j<m;j++) {
    summ+=nums[k][j];

  }
  result.push(summ)
}
console.log('sum of elements of 2D array',summ)
console.log(' 2D array',result)

// 2.모든 원소들의 합을 구하시오
// 1 + 2 + 3 + 4 ... + 9

let total=0;
for(let arr of nums) {
 for(let num of arr) {
  total+=num;
 }
}


