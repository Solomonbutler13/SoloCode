```js
/* Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]            */
    
    function changeNums(arr, callback) {
      // Store new array
      let newArr = []
 
      // Iterate through the array
      for (let i = 0; i < arr.length; i++) {
          // Push the callback function into the new array
          newArr.push(callback(arr[i]))
      }
 
      // Return the new array
      return newArr
  }
 
  // Doubler - input: number ----X2-----> output: number
  const doubler = (num) => num * 2
 
  // Halve - input: number ----/2-----> output: number
  const halves = (num) => num / 2
 
  // Pow - input: number ----X^2-----> output: number
  const pow = (num) => num ** 2
 
// Examples
console.log(changeNums([1,2,3,4,5], doubler)) // => [2,4,6,8,10]
console.log(changeNums([1,2,3,4,5], halves)) // => [.5,1,1.5,2,2.5]
console.log(changeNums([1,2,3,4,5], pow)) // => [1,4,9,16,25]
```

```js
/* Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2                    */

    // 4 Functions
// - [ ] StringInfo
const stringInfo = (str, callback) => callback(str)
 
// - [ ] Length
    const stringLength = str => str.length
// - [ ] Vowel
    const stringVowels = str => {
      // input ' '
      // define vowels
      let vowels = 'aeiou'
 
      // define counter
      let count = 0
 
      for (let i = 0; i < str.length; i++) {
        // Check if vowel
          // Yes
          if ( vowels.includes( str[i] ) ) { // input  -> 'aeiou'.includes('o')
            // Increment Counter
            count += 1
          }
      }
      return count;
    }
// - [ ] Capitals
function stringCapitals(str) {
  // input -> 'string'
 
  // Working Memory
  let count = 0
 
  // Counting all capital letters
  // iterate through
  for (letter of str) {
    // Is the letter capital?
    // letter = 'u'
    if ( letter.toUpperCase() === letter && letter != '!' && letter != ' ' ) {  // 'u' === 'u' True
      // yes
      // count it
      count += 1
      }
      // no
        // skip
  }
  return count
  // Output -> number
}
// - [ ] NonLetters
function nonLetters( str ) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 
  let count = 0
  
  for (letter of str) {
    if ( !alphabet.includes(letter) ) {
      count += 1
    }
  }
 
  return count
}
 
```

```js


/* Question 3
Write a higher order function that minimizes a given list of numbers into one number
  Example:
  minimizeNums(add, [2,3,5,8]) => 18                            */
  
 
function minimizeNums(callback, arr) {
  // input: callback, array
  // output: number (sum of array)
 
  // Working Memory
  let sum = 0
 
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // for each element run the callback function and store the result
    sum = callback(sum, arr[i])
  }
}
 
function add (num1, num2) {
  return num1 + num2
}
```