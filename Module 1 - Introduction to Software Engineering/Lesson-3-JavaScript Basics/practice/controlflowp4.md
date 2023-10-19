```js

// If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'
let x =42
let y =45
if(x===42 || y ==42) {  console.log("I see you've found the ultimate answer to life, the universe and everything.")
}

// Save your name to a variable called name
let myName = 'Solomon' 
console.log (myName)


// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
 
if(myName.length < 10){
    console.log("you'll need more charachters");
}
// Otherwise log, 'I see you've got enough characters!' to the console.
else {
    console.log('i see you have got enough characters');
}
// Create the following if statement: 
// If this month (1-12) is after March and before December, log 'Winter is Coming!'

let thisMonth = 11
console.log (thisMonth)
if(thisMonth > 3 && thisMonth < 12) {
    console.log ('Winter is Coming!');
}

// Create two variables a & b initialized as numbers
// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'

let a =12
let b =13
if (a > b) {
    console.log ('a is greater than b')
}else if (a < b) {
    console.log('a is less than b') }
else {
    console.log ('a is equal to b')
}
    

```

```output
I see you've found the ultimate answer to life, the universe and everything.
Solomon
you'll need more charachters
11
Winter is Coming!
```