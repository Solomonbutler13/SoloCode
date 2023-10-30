```js
// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel', 'Alexander']
 
// Normal for loop moving through the array "names"
for (let i = 0; i < names.length; i++) {
  // Declare a variable to hold the current name
  const name = names[i]
 
  // For each "name", loop through the letters in the name
  for (let j = 0; j < name.length; j++) {
    // If the letter is "a"
    if (name[j] === 'a' || name[j] === 'A') {
      // log the name to the console
      console.log(name)
      // Break out of the inner loop
      break
    }
  }
}
 
// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This', 'is', 'an', 'array', 'of', 'strings']
 
// Declare a new Array to hold the new strings
const newStringArray = []
 
// Normal for loop moving through the array "stringArray"
for (let i = 0; i < stringArray.length; i++) {
  // Declare a variable to hold the current string
  const string = stringArray[i]
  // For each "string", loop through the letters in the string
  let newWord = ''
  for (let j = 0; j < string.length; j++) {
    // If the index is even
    if (j % 2 === 0) {
      // Push the capitalized letter to the new array
      newWord += string[j].toUpperCase()
    } else {
      // Else
      // Push the Lowercased letter to the new array
      newWord += string[j].toLowerCase()
    }
  }
  newStringArray[i] = newWord
}
console.log(newStringArray)
 
// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [
  [5, 4, 3],
  [20, 15, 50],
  [20, 13, 50],
  [21, 35, 10],
  [25, 21, 31]
]
 
// // Loop through outer array
// for (let i = 0; i < arrayOfArrays.length; i++) {
//   // Create a variable for the sum
//   let sum = 0
 
//   // Loop through each inner array
//   for (let j = 0; j < arrayOfArrays[i].length; j++) {
//     // Add the current value to the sum
//       sum += arrayOfArrays[i][j]
//     }
//     // Reassigning the respective index within the new array to the sum
//     arrayOfArrays[i] = sum
//     // arrayOfArrays[i] = sum
//             // Alternative: Push the sum to the new array
//             // newArrayOfArrays.push(sum)
// }
// // Log updated array or new array
// console.log(arrayOfArrays)
 
// Declare the new array
const newArrayOfArrays = []
// Loop through outer array
for (let i = 0; i < arrayOfArrays.length; i++) {
  // Create a variable for the sum
  let sum = 0
 
  // Loop through each inner array
  for (let j = 0; j < arrayOfArrays[i].length; j++) {
    // Add the current value to the sum
    sum += arrayOfArrays[i][j]
  }
  // Alternative: Push the sum to the new array
  // newArrayOfArrays.push(sum)
  newArrayOfArrays[i] = sum
}
// Log updated array or new array
console.log(newArrayOfArrays)
 
```

```output
Jordan
Daniel
Alexander
[ 'ThIs', 'Is', 'An', 'ArRaY', 'Of', 'StRiNgS' ]
[ 12, 85, 83, 66, 77 ]
```