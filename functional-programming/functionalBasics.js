const persons = [
  { name: 'Tom', category: 'Animal' },
  { name: 'Jerry', category: 'Animal' },
  { name: 'Butterfly', category: 'Insect' },
  { name: 'Crow', category: 'Bird' },
  { name: 'Peacock', category: 'Bird' },
]

let insects = []
for (let i = 0; i < persons.length; i++) {
  // console.log(person[i].category)
  if (persons[i].category === 'Insect') {
    insects.push(persons[i])
  }
}
console.log(insects)

let isAnimal = (el) => el.category === 'Animal'
let animals = persons.filter(isAnimal)
console.log(animals)

