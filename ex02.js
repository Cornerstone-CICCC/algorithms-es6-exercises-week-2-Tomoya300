/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = function (values, condition) {
  let filtered = values.filter((item) => {
    if (condition === "even") {
      return item%2 === 0
    }
    if (condition === "odd") {
      return item%2 === 1
    }
  })
    // let result = filtered.reduce((sum, now) => {
  //   return sum + now
  // }, 0)
  // return result

  // return filtered.reduce((sum, now ) => {
  //   return sum + now
  // }, 0)

  return filtered.reduce((sum, now) => sum + now, 0)
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0
    



// const conditionalSum = function (values, condition) {
//   if (values.length === 0) {
//     return 0
//   }
//   let sum = 0
//   for (let element of values) {
//     if (condition === "even" && element%2 === 0){
//       sum += element
//     }
//     if (condition === "odd" && element%2 === 1) {
//       sum += element
//     }
//   }
//   return sum
// };

// console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
// console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
// console.log(conditionalSum([], "odd")); // 0

module.exports = conditionalSum;
