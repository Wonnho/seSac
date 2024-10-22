const people = [
  {
    name: 'jun',
    age: 15,
    sex: 'M',
  },

  {
    name: 'Judy',
    age: 25,
    sex: 'F',
  },
  {
    name: 'Judas',
    age: 37,
    sex: '-',
  },
];

// 첫번째
for (let person of people) {
  // console.log('person information:', person);
  for (let key in person) {
    let value = person[key];
    console.log(key, value);
  }
}

// 두 번째, 이름이 alex인 사람에 대한 정보를 출력하시오
// for (let person of people) {
//   if (person.name === 'Judas') {
//     console.log(`record of alex: ${JSON.stringify(person)}`);
//   }
// }


for (let person of people) {
  let name=person.name;
  if (name === 'Judas') {
    console.log(person);
  }
}


for (let person of people) {
  const name=person.name;
  if (name === 'Judas') {
    const age=person.age;
    console.log('Judas age:',age);
  }
}