function bouncer(arr) {
 let val = arr.filter(el => el === (Boolean(el) === true ? el : []))
 // val.map(el => el[0])
  // if(isNaN(val[0])) return val.map(el)
 return val;
}

console.log(bouncer([false, null, 0, NaN, undefined, true, "1"]))