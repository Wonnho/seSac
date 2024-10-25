const arr=['a','b','c','d'];

arr.forEach((value,index,arr)=>{
  console.log(value,index,arr)
})
arr.length;

arr.forEach((ind)=>{
  console.log(ind)
});

function hap(a,b) {
  return a+b;
}

const value=hap(1,2);
console.log(value);
