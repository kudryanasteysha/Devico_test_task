const fs = require('fs');

function countNumberOfAnimalsLegs(file) {
  let data = fs.readFileSync(file);
  let animals = JSON.parse(data);
  let total = 0;

  for (let species in animals) {
    let legs = 0;
    switch (species) {
      case 'pigs':
        legs = animals[species] * 4;
        break;
      case 'chickens':
        legs = animals[species] * 2;
        break;
      case 'cows':
        legs = animals[species] * 4;
        break;
    }
    total += legs;
  }

  return total;
}

let result = countNumberOfAnimalsLegs('animals.json');
console.log(`The total number of legs of all animals: ${result}`);