function truncateString(str, num) {
  let val = ''
  if (str.length > num) {
    val = str.slice(0, num).concat('...')
    
    // str = val
    console.log("val", val)
    return val
  } else {
    return str
  }
}

console.log(truncateString(
 'A1',4
)
)