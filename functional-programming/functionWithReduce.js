let salary = [{ amount: 100 }, { amount: 400 }, { amount: 200 }]

let totalSalary = 0

for (let i = 0; i < salary.length; i++) {
  totalSalary += salary[i].amount
}

console.log(totalSalary)
//  == with reduce
let reducedSalary = (acc, elem) => acc + elem.amount
let total = salary.reduce(reducedSalary, 0)
console.log(total)
