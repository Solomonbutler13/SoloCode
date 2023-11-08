```js
// Turn the following string into all lowercase letters

const noCaps = 'This Should Not Have Capital Letters!'
const lowercase = noCaps.toLowerCase()

// Turn the following string into all uppercase letters

const loud = "i'm very loud!" 
const toUpperCase = loud.toUpperCase() 



// Join the prior two variables together.
 
console. log(lowercase + toUpperCase)

// Turn the following string into an array of names

const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector' .split(' ')
console.log(stringOfNames)

// Make your own mad-libs using a template literal



// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"

console.log(ironMan[0])
console.log(ironMan[5])
console.log (ironMan[0]+ ironMan[5])

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"

console. log(string. slice (19,27))
const allStar = string. slice (19,27)

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
console.log(string1.slice (11))


// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';

console.log (parseInt(ten)+ parseInt(five))

// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'.split(' ')
console.log(sentence) 


```

```output
this should not have capital letters!I'M VERY LOUD!
[
  'Ally',   'Becca',
  'Carlos', 'Drake',
  'Edgar',  'Felicity',
  'Greta',  'Hector'
]
T
S
TS
all-star
?
15
[ 'Welcome', 'to', 'the', 'jungle!' ]
```