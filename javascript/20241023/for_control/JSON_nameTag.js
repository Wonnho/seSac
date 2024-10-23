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

const objectPeople = {};
for (const person of people) {
  const name = person.name;

  objectPeople[name] = person;
  // objectPeople['jun']=person;
}

console.log(objectPeople);
