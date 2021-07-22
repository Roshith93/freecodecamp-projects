function confirmEnding(str, target) {
  let getFirstStr = str.slice(str.length - target.length)
  if (getFirstStr === target) return true
  if (getFirstStr !== target) return false
  
}

console.log(confirmEnding('Ope segame', 'game'))


// let str = "How are you doing today?";
// const myArr = str.split(" ")[str.length - 1]
// console.log(myArr)