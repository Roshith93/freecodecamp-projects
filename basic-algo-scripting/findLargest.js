function largestOfFour(arr) {
 let temp = []
 for (let i = 0; i < arr.length; i++) {
   let largestNum = Math.max(...arr[i])
   temp[i] = largestNum;
  }
  arr.splice(0)
  arr.push(...temp)
 return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
