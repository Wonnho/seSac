const user ={
  name:'KarlMarx',
  address:{
    city:'Berlin'
  },
}

console.log(user?.name)
// console.log(user?.address?.city)
console.log(user.address?.city)
console.log(user?.phone?.number)

