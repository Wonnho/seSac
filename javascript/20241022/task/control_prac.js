// 8
const people = {
  names: ['jun', 'ken', 'alex'],
  ages: [15, 26, 37],
  sex: ['M', 'F', '-'],
};

// people length
//console.log(people.length);// undefiend

// console.log(people.names.length);
// console.log(people.ages.length);
// console.log(people.sex.length);

//print out people's information
for (let k = 0; k < people.names.length; k++) {
  console.log(
    'people information: ',
    people.names[k],
    people.ages[k],
    people.sex[k]
  );
}

// print on information of alex

for (let k = 0; k < people.names.length; k++) {
  if (people.names[k] == 'alex') {
    console.log(
      `${people.names[k]} information:, ${people.names[k]},${people.ages[k]},${people.sex[k]}`
    );
  }
}

//print age of alex
for (let k = 0; k < people.names.length; k++) {
  if (people.names[k] == 'alex') {
    console.log(`${people.ages[k]}`)
      }
  
  }

