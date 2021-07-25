const persons = [
  { name: 'Tom', category: 'Animal' },
  { name: 'Jerry', category: 'Animal' },
  { name: 'Butterfly', category: 'Insect' },
  { name: 'Crow', category: 'Bird' },
  { name: 'Peacock', category: 'Bird' },
]

let animals = []
for (let i = 0; i < persons.length; i++) {
  animals.push(persons[i].name)
}
console.log(animals)

// === with map
let allAnimals = el => el.name
let animalsAre = persons.map(allAnimals)
console.log(animalsAre)
