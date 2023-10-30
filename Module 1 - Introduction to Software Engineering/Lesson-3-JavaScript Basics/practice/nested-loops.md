```js
// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel']
console.log (names)

for (let i = 0; i <names.length; i++) {
 let name = names[i] // 'Bill'
 for(let j=0; j<name. length; j++){
        let letter = name[j] // 'B'
        if (letter === 'a'){
            console.log(name)
            break
        }
    }
}


// or

const names1 = ['Bill', 'Jordan', 'Pete', 'Daniel'];

for (let i = 0; i < names1.length; i++) {
  const words = names1[i].split(' '); // Split the name into words

  for (let j = 0; j < words.length; j++) {
    if (words[j].includes('a')) {
      console.log(words[j]);
    }
  }
}

// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This','is','an','array','of','strings']
const newArray = []
console.log(Boolean(stringArray[0])) //true
console.log(Boolean(newArray[1]))   //undefined -> False



// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
```

```output
[ 'Bill', 'Jordan', 'Pete', 'Daniel' ]
Jordan
Daniel
Jordan
Daniel
true
false
```