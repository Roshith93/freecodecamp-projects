function getIndexToIns(arr, num) {
  let sortArr = arr.sort()
  let fillData = sortArr.filter((val) => num > val).length
  console.log(fillData)
  return fillData
}

getIndexToIns([10, 20, 30, 40, 50], 30)
