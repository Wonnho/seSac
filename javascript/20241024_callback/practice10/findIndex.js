arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

const findIndex=arr.findIndex((index)=>{
  return index%5===0;
})

console.log('find first index of 5:',findIndex)
