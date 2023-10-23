```js
// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
let tenmult = numArr[0]*10
console.log (tenmult)

// Add an additional element to the prior array

numArr.push(6)

console.log(numArr);

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'

numArr.pop()
console.log(numArr)

numArr.push('removedItem')
console.log(numArr)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

console.log(numArr.includes (1))



// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

numArr.shift();
console.log(numArr)
numArr.unshift("removedFirstItem")
console.log (numArr)

// Add that item back
numArr.unshift(1)
console.log(numArr)


// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis. sort();
console.log (sortThis)

// Now reverse the prior array

sortThis. reverse()
console.log(sortThis)
  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

let myFavs = 'My favorite foods are pizza, Ackee, double'
console.log(myFavs)


// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

myFavs = myFavs.split(', ')
console.log ('myFavs split: ', myFavs)

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

myFavs = myFavs.join('-.')
console.log ('myFavs join: ', myFavs)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
let var1 = [1,2,3,4,5,7,8,9,10]
var1.splice(5,0,6)
console.log(var1)

// Create two arrays and, using JavaScript join them together

let array1 = [1,2,3,4]
let array2 = [10,20,30,40]
console.log(array1,array2)

let numbers = array1.concat (array2)
console.log(numbers)
// Create a multi-dimensional array
```

```output
10
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 'removedItem' ]
true
[ 2, 3, 4, 5, 'removedItem' ]
[ 'removedFirstItem', 2, 3, 4, 5, 'removedItem' ]
[ 1, 'removedFirstItem', 2, 3, 4, 5, 'removedItem' ]
[ 'apple', 'banana', 'cherry', 'dairy', 'eel' ]
[ 'eel', 'dairy', 'cherry', 'banana', 'apple' ]
My favorite foods are pizza, Ackee, double
myFavs split:  [ 'My favorite foods are pizza', 'Ackee', 'double' ]
myFavs join:  My favorite foods are pizza-Ackee-double
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
[ 1, 2, 3, 4 ] [ 10, 20, 30, 40 ]
[
   1,  2,  3,  4,
  10, 20, 30, 40
]
```