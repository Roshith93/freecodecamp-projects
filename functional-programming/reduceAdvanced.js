// var fs = require('fs')
// let userDatas = fs.readFileSync('userData.txt', 'utf8')
// console.log(userDatas.trim().split('\n').map(el => el.split('\t')))

// ! splice on every second number and form an array
export const abc = () => 'hello'
const str = `mark iron 80 2
mark blender 100 1
mark knife 20 4
Nikita iron 80 1
Nikita blender 100 1
Nikita knife 20 4`

// let splitOnNewLine = userDatas.trim().split("\n")
// let splitOnNewTab = splitOnNewLine.map(el => el.split("\t"))

let valToArr = str.split('\n')
let mappedValue = valToArr.map((el) => el.split(' '))
// let splitMore = mappedValue.map(el => el.split('m'))

let createFilterObj = (acc, [name, order, price, quantity, abc], index) => {
  acc[name] = acc[name] || []
  acc[name].push({ order, price, quantity })
  return acc
}

let finalValue = mappedValue.reduce(createFilterObj, {})
console.log(finalValue)

// result
const tsArr = {
  'mark johans': [
    { name: 'waffle iron', price: '80', quantity: 2 },
    { name: 'waffle iron', price: '80', quantity: 2 },
  ],
  'Nikitha-SS': [
    { name: 'waffle iron', price: '80', quantity: 2 },
    { name: 'waffle iron', price: '80', quantity: 2 },
  ],
}
