```js
// && = and
// || = or

console.log(true && true); // true

console.log(true && false); // false

console.log(false && false); // false

console.log(true || true); // true

console.log(true || false); // true

console.log(false || false); // false

// Create two variables, one equal to '10' and the other equal to 10

let var1 = '10'
let var2 = 10

// Comparing the two variables, are they strictly equal? false

console.log ('10'===10)


// Comparing the two variables, are they loosely equal? true

console.log ('10'==10)

// Comparing our two prior variables, in one statement, are they both loosely equal and strictly equal? (Using the && operator)

console.log ('10'===10 && '10'==10) // false

// Comparing our two prior variables, in one statement, are they either loosely equal or strictly equal? (Using the || operator)

console.log ('10'===10 || '10'==10) // true

// Check if the variable set to 10 is not loosely equal to 'ten' 

console.log (10 =='ten') // false

// Create a variable and initialize it to true, check if it is not strictly equal to 'true'
let var3 = '11'
console.log (!var3 === 'true') // false
```

```output
true
false
false
true
true
false
false
true
false
true
false
false
```