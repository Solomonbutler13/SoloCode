```js
// .reduce() Practice

/* Question 1
Write a HOF to reduce an array of numbers to all the numbers added up */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums.reduce((accumulator, currentValue) => { return accumulator + currentValue }))
```

```output
55
```

```js
/* Question 2
Write a HOF to reduce all numbers in an array to all numbers multiplied together */



console.log(nums.reduce((accumulator, currentValue) => accumulator * currentValue))
```

```output
3628800
```

```js

/* Question 3
Write a HOF to reduce all numbers in an array to the largest number */


console.log(nums.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue)))
```

```output
10
```

```js
/* Question 4
Write a HOF to find the oldest person in a group */
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]

console.log(partyPeople.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue)
    return accumulator.page > currentValue.age ? accumulator : currentVaule
}))

```

```output
{ name: 'John', age: 25 } { name: 'Jordan', age: 18 }
/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:34
return accumulator.page > currentValue.age ? accumulator : currentVaule
                                                           ^

ReferenceError: currentVaule is not defined
    at /private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:34:60
    at Array.reduce (<anonymous>)
    at Object.<anonymous> (/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:32:25)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.0
```