```js
// .map() Practice

/* Question 1
Using .map() create a new array that doubles all the numbers in a given array */
const numbers = [ 1, 2, 3, 4, 5 ]

const multiplyBy2 = cur => cur * 2;

const storeArray2 = numbers.map(multiplyBy2);

console.log(storeArray2);
```

```output
[ 2, 4, 6, 8, 10 ]
```

```js
/* Question 2
Using .map() create a new array that halves all numbers in a given array */

const num = [ 1, 2, 3, 4, 5 ]

const dividBy2 = cur => cur / 2;

const storeArray = num.map(dividBy2);

console.log(storeArray);
```

```output
[ 0.5, 1, 1.5, 2, 2.5 ]
```

```js
/* Question 3
Using .map() create a new array that squares all of the numbers in a given array */

const num1 = [ 1, 2, 3, 4, 5 ]

const square = cur => cur ** 2;

const storeArr = num.map(square);

console.log(storeArr);
```

```output
[ 1, 4, 9, 16, 25 ]
```

```js
/* Question 4
Using .map() create a new array of all capital strings from an array of lower case strings */

const lowerCase = ['hello', 'world', 'how', 'are', 'you'];

// toUpperCase to capitalize each string
const capitalizedArray = lowerCase.map(str => str.toUpperCase());

console.log(capitalizedArray);
```

```output
[ 'HELLO', 'WORLD', 'HOW', 'ARE', 'YOU' ]
```

```js
/* Question 5
Using .map() create a new array of greeting sentences from an array of given people
  Expected output:
    ['Hello Pamela', 'Hello Michael', 'Hello Angela'] */

    const people = ['Pamela', 'Michael', 'Angela'];

// Using map to create greeting sentences
const greetings = people.map(person => `Hello ${person}`);

console.log(greetings);
```

```output
[ 'Hello Pamela', 'Hello Michael', 'Hello Angela' ]
```