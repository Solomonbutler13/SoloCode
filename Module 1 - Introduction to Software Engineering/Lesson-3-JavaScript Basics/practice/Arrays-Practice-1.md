```js
// Declare an empty array
let array = []

// Declare an array with all the data types you can think of within it

let array1 = ['string', true, null, undefined, 100, [1,2,3], function(){}]

// Make a list of classmates names first names in an array

let classM = ['Anton', 'Tiffany', 'Nate']

// Get the length of that previous array

console.log(classM.length)

// Check the type of the previous array

console.log(typeof classM)

// Check if the previous array is an array

console.log(Array.isArray(classM))

// Using indexing, grab your name from that previous array

const holdString = array1[0];
console.log(holdString);

// Use the following variable to get the student at the index from the array of students
let index = 2; 
console.log(classM[index])

// Update the array to have each element as a students first and last name : 'firstName lastName'

classM [0] = 'Anton Chislom'
classM [1] = 'Tiffany Wright'
classM [2] = 'Nate Gibbs'

console.log(classM)




```

```output
3
object
true
string
Nate
[ 'Anton Chislom', 'Tiffany Wright', 'Nate Gibbs' ]
```