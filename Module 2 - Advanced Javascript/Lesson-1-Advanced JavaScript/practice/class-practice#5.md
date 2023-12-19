```js
// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

console.log (q1Array.filter(num => num > 5))
```

```output
[ 6, 7, 8, 9, 10 ]
```

```js
/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log (q2Array.filter(number => number % 2 === 0))

```

```output
[ 2, 4, 6, 8, 10 ]
```

```js
/* Question 3
Write a function to filter an array for all the non number item */
const q3Array = [1, 'a', 'b', 2, {}, []]

console.log (q3Array.filter(item => isNaN(item)));
```

```output
[ 'a', 'b', {} ]
```

```js
/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
    { name: 'John', age: 25 },
    { name: 'Jordan', age: 18 },
    { name: 'Frank', age: 50 },
    { name: 'Anna', age: 12 }
  ]

  let peopleOver21 = partyPeople.filter(person => person.age > 21)

  peopleOver21.forEach(person => console.log(person.name))
```

```output
John
Frank
```

```js
/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */

  // filter through string removing spaces- filter
 
console.log('Hello World'.split('').filter(char => char !== ' ').join(''))
 
 
 
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
 
console.log('Hello World'.split('').filter(char => alphabet.includes(char.toLowerCase())).join(''))
```

```js
// .filter() Practice
 
console.log('Question 1')
/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// iterate through array removing all numbers less than 5 - filter
console.log(q1Array.filter(num => num > 5))
 
 
console.log('Question 2')
/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
console.log(q2Array.filter(num => num % 2 === 0))
 
 
 
console.log('Question 3')
/* Question 3
Write a function to filter an array for all the non number item */
const q3Array = [1, 'a', 'b', 2, {}, []]
 
// iterate through array removing all numbers - filter
// if typeof num === 'number'
// return true
// else
// return false
console.log(q3Array.filter(num => typeof num === 'number'))
 
console.log('Question 4')
/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: 'John', age: 25 },
  { name: 'Jordan', age: 18 },
  { name: 'Frank', age: 50 },
  { name: 'Anna', age: 12 }
]
 
// filter through array - filter -> return array of people over 21
let peopleOver21 = partyPeople.filter(person => person.age > 21)
// iterate through and log each person's name - forEach -> console.log(person.name)
peopleOver21.forEach(person => console.log(person.name))
 
console.log('Question 5')
/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */
 
// filter through string removing spaces- filter
 
console.log('Hello World'.split('').filter(char => char !== ' ').join(''))
 
 
 
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
 
console.log('Hello World'.split('').filter(char => alphabet.includes(char.toLowerCase())).join(''))
```