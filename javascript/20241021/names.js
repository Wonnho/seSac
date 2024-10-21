const names=['jun','Linda','beemo','Horis']

console.log('jun')

let name='beemo'
console.log(`${name}`)
console.log()
  
const person ={
  name:'Tchaikovsky',
  age:78,
  gender:'Male'

}

//key : key value of Object

for (let key in person) {
  console.log(key);
}


for (let index in names) {
  let name=names[index];
  console.log(`new incrutees:${name}`)
}