function frankenSplice(arr1, arr2, n) {
 let val1 = arr1.slice(0)
 let val2 = arr2.slice(0)
 val2.splice(n,0,...val1)
 console.log(val2)
 console.log(arr1)
 console.log(arr2)
  return val2
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
