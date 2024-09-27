/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  let largest = data[0] > data[1] ? data[0] : data[1]
  let secondLargest = data[0] > data[1] ? data[1] : data[0]
  data.forEach((num, index) => {
    if (index > 1) {
      if (num > largest) {
        secondLargest = largest
        largest = num
      } else if (num > secondLargest) {
        secondLargest = num
      }
    }
  })
  return largest + secondLargest
  };

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;


// const array =[1, 2, 3, 4, 5, 6]

// let modefiedArray = array.map((item, index) => {
//   return item*2
// })
// console.log(modefiedArray)

// let evenNumber = array.filter((item) => {
//   if (item%2 === 0) {
//     return item
//   }
// })
// console.log(evenNumber)

// array.forEach((item) => {
//   console.log(item*2)
// })


// const users = [
//   {name: "Ethan", age: 20}, 
//   {name: "Kaylee", age: 19},
//   {name: "Sabby", age:18}
// ]
// let user = users.map(user => user.name)
// console.log(user)

// let array = [1, 2, 3, 4, 5, 3, 3, 3]
// let set = new Set([...array])
// console.log(Array.from(set))

// function sample(array) {
//   let result = 0
//   for (i = 0; i < array.size; i++) {
//     result += array[i]
//   }
//   return result
// }
// console.log(sample([1, 2, 3, 4, 5, 3, 3, 3]))
