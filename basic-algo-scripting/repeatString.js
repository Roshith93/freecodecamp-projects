function repeatStringNumTimes(str, num) {
  let newVal = ''
  if (num >= 1) {
    for (let i = 1; i <= num; i++) {
      newVal = newVal.concat(str)
    }
  }
  str = newVal
  return str
}

console.log(repeatStringNumTimes('abc', 4))
