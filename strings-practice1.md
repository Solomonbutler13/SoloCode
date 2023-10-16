```js
// Turn the following string into all lowercase letters

const noCaps ='This Should Not Have Capital Letters!'

noCaps = noCaps.toLowerCase()

console.log(noCaps)
console.log(noCaps.toLowerCase())


// Turn the following string into all uppercase letters
const loud = "i'm very loud!";

const loud = "i'm very loud!" .toUpperCase()
console. log(loud); 

// Join the prior two variables together.
 
console. log(noCaps +loud)

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';

const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector' .split(' ')
console.log(stringOfNames)


// Make your own mad-libs using a template literal

const adjective = 'smooky'
const noun = 'chicken'
const verb = 'drop'
const adverb = 'slowly'

const adlib = ` The 

`

// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"



// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"


// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 




// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';


// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
```

```output
/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:16
const loud = "i'm very loud!" .toUpperCase()
      ^

SyntaxError: Identifier 'loud' has already been declared
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1153:20)
    at Module._compile (node:internal/modules/cjs/loader:1205:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.0
```