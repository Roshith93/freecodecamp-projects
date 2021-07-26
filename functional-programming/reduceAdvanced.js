var fs = require('fs')
let userDatas = fs.readFileSync('userData.txt', 'utf8')
console.log(typeof userDatas)

// export const abc = () => "hello"

// result
const abc = {
  'mark johans': [
    { name: 'waffle iron', price: '80', quantity: 2 },
    { name: 'waffle iron', price: '80', quantity: 2 },
  ],
  'Nikitha-SS': [
    { name: 'waffle iron', price: '80', quantity: 2 },
    { name: 'waffle iron', price: '80', quantity: 2 },
  ],
}
