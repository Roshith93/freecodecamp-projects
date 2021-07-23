function titleCase(str) {
  let val = str.split(' ')
  let arr = []
  val.map((el) =>
    arr.push(el[0].toUpperCase() + el.slice(1, el.length).toLowerCase())
  )
  return arr.join(' ')
}

console.log(titleCase("I'm a lLLLMttle tea pot"))
