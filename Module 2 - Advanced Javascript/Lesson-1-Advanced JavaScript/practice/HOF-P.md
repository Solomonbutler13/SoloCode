```js
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
```

```output
8
8
-2
16
```

```js
/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply, 1,4,1,231,5) => 4620
    calculateAll(subtract, 2,4,5,7) => -14
*/

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
  const multiplicationResult = calculateAll(multiply, [1, 4, 1, 231, 5]);
const subtractionResult = calculateAll(subtract, [2, 4, 5, 7]);

console.log(multiplicationResult); // Output: 4620
console.log(subtractionResult);    // Output: -14
```

```output
4620
-14
```

```js
/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/
const yeller = (str) => str.toUpperCase() + '!!!';
const sarcastic = (str) => str.split('').map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())).join('');
const code = (str) => str.replace(/[aeiou]/gi, '-');

const manipulationFunctions = {
  yeller,
  sarcastic,
  code,
};

const modify = (key, inputString) => {
  const manipulationFunction = manipulationFunctions[key];
  if (manipulationFunction) {
    return manipulationFunction(inputString);
  } else {
    console.error('Invalid key');
    return inputString;
  }
};

// Example Usage:
const result1 = modify('yeller', 'I need a nap');
const result2 = modify('sarcastic', 'I really like running');
const result3 = modify('code', 'There is no cake');

console.log(result1); // Output: I NEED A NAP!!!
console.log(result2); // Output: I ReAlLy lIkE RuNnIng
console.log(result3); // Output: Th-r- -s n- c-k-
```

```output
I NEED A NAP!!!
I ReAlLy lIkE RuNnInG
Th-r- -s n- c-k-
```

```js
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

const oneType = (dataType, array) => {
  const filterFunction = {
    strings: filterStrings,
    arrays: filterArrays,
    nums: filterNumbers,
  }[dataType];

  if (filterFunction) {
    return filterFunction(array);
  } else {
    console.error('Invalid data type');
    return [];
  }
};

// Example Usage:
const stringsArray = oneType('strings', ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]);
const arraysArray = oneType('arrays', ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]);
const numsArray = oneType('nums', ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]);

console.log(stringsArray); // Output: ['I love coding', 'goosfraba']
console.log(arraysArray);  // Output: [['Nested Array!']]
console.log(numsArray);    // Output: [10, Infinity]
```

```output
/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:106
strings: filterStrings,
         ^

ReferenceError: filterStrings is not defined
    at oneType (/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:106:10)
    at Object.<anonymous> (/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:120:22)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.0
```