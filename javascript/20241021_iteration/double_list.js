ages = [18, 28, 37];
const names = ['Kaley', 'MarkJugberg', 'Biangka'];

for (const k in names) {
  let name = names[k];
  let age = ages[k];
  console.log(`${age} 살 ${name}`);
}
