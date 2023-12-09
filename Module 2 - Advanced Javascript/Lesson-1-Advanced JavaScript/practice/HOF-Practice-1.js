/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */

const calculate = (callback, num1, nnum2) => callback(num1, nnum2)

console.log(calculate((num1, num2) => num1 * num2, 2, 4)) // 8

const multiply = (num1, num2) => num1 * num2
const subtract = (num1, num2) => num1 - num2
const exponent = (num1, num2) => num1 ** num2 

console.log (calculate(multiply, 2, 4)) // 8
console.log (calculate(subtract, 2, 4)) // -2
console.log (calculate(exponent, 2, 4)) // 16

/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply, 1,4,1,231,5) => 4620
    calculateAll(subtract, 2,4,5,7) => -14
*/
// Callback functions
const multiply = (result, element) => result * element;
const subtract = (result, element) => result - element;
// Add more callback functions as needed

// Main function
const calculateAll = (callback, arr) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }

  return result;
};

// Example Usage:
const multiplicationResult = calculateAll(multiply, [1, 4, 1, 231, 5]);
const subtractionResult = calculateAll(subtract, [2, 4, 5, 7]);

console.log(multiplicationResult); // Output: 4620
console.log(subtractionResult);    // Output: -14

// or 

const calculateAll = (callback, arr) => {
  //   result variable
  let result = arr[0]
  //   iterate through arr
  for (let i = 1; i < arr.length; i++) {
    //   perform callback on each element (result variable, element variable) store the return in the result variable   
    result = callback(result, arr[i])
  }
  //  return result variable
  return result
}


/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/

/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/
    
    