```js
// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */

const num = [5,10,15,20]

num.forEach(element => console.log(element));
```

```output
5
10
15
20
```

```js
/* Question 2
Given an array of people, log a greeting to the console for each person. */
```

```js
/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]
```

```js
/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']
```

```js
/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
```

```js
// .forEach Practice
 
console.log('forEach Practice')
 
console.log('Question 1')
/* Question 1
Given an array of numbers, log each number to the console. */
const nums = [9, 20, 42, 63, 1, 2, 3, 4, 5]
nums.forEach(num => console.log(num))
 
 
console.log('Question 2')
/* Question 2
Given an array of people, log a greeting to the console for each person. */
const names = ['joe', 'amy', 'jane', 'sam', 'tom']
names.forEach(name => console.log(`Hello ${name}`))
 
 
console.log('Question 3')
/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]
 
// iterate through array - forEach
// check if value is undefined
  // if it is, log 'undefined'
  // otherwise, log 'defined'
 
mixed.forEach(value => value === undefined ? console.log('undefined') : console.log('defined') )
 
 
 
 
 
 
 
 
 
 
 
 
/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']
 
 
// iterate through array - forEach
arrayOfStrings.forEach( str => {
  // define vowels
  let vowels = 'aeiou'
 
  // define counter
  let counter = 0
 
  // iterate through string
  for (let i = 0; i < str.length; i++) {
    // check if vowel
    if (vowels.includes(str[i].toLowerCase())) {
      // if it is, increment counter
      counter++
    }
  }
  // log counter
  console.log(counter)
})
 
 
 
 
 
 
 
 
 
 
 
 
 
/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
 
 
// iterate through array - forEach
  // log the doubled number
 
numbers.forEach(num => console.log(num * 2))
```