/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  // let array = []
  // for (i = 0; i < data.length; i++) {
  //   array.push(data[i])
  // }
  let array = Array.from(data)
  let count = 0
  let filtered = array.filter((text) => {
   if (text === "a" || text === "e" || text === "i" || text === "o" || text === "u") {
    count += 1
    return true
   }
   return false
  })
  return count
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
