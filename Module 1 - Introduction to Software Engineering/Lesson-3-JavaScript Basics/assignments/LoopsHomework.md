```js
// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'

for(let i = 0; i <= 30; i++){
    console.log('the current index is ${i}');
}

// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for(let i = 1; i <= 10; i+=2){
    console.log(i)
}

// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

let myCelebs = ['Lebron James' ,'Will Smith', 'Jada Smith' ,'Denzel Wash' ,'Jack Black']
console.log (myCelebs)


for (let i = 0; i < myCelebs.length; i++) {
    console.log(myCelebs[i]);
  }

// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console

for (let i = 0; i < myCelebs.length; i++) {
if (myCelebs[i].length % 2 === 0) {
    console.log(myCelebs[i]);
}
}
// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names


let fNames = [];

for (let i = 0; i < myCelebs.length; i++) {
  const fullName = myCelebs[i];
  const splitName = fullName.split(' ');
  const firstName = splitName[0];
  fNames.push(firstName);
}

console.log(fNames);


// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names
const lNames = [];
for (let i = 0; i < myCelebs.length; i++) {
    const fullName = myCelebs[i];
    const splitName = fullName.split(' ');
    const lastName = splitName[splitName.length - 1]; // Get the last element in the split array
    lNames.push(lastName);
  }
  
  console.log(lNames);


// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
const vowels = ['a','e','i','o','u'];
console.log(vowels)

for (let i = 0; i < myCelebs.length; i++) {
        const fullName = myCelebs[i];
    for (let j = 0; j < vowels. length; j++){
        const lvowels = fullName[j].toLowerCase();
        if (lvowels === 'a' || lvowels === 'e' || lvowels === 'i' || lvowels === 'o' || lvowels === 'u') {
            console.log(lvowels);
        }
    }
}
// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console

for (let i = 0; i < myCelebs.length; i++) {
    const fullName = myCelebs[i];
  
    for (let j = 0; j < fullName.length; j++) {
      const letter = fullName[j];
      if (letter === letter.toUpperCase()) {
        console.log(letter);
      }
    }
  }


// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

const celebsInAllCapsNoSpaces = [];

for (let i = 0; i < myCelebs.length; i++) {
    const fullName = myCelebs[i];
    const nameWithoutSpaces = fullName.replace(/\s/, '-'); // Remove spaces
    const nameInAllCaps = nameWithoutSpaces.toUpperCase(); // Convert to all uppercase
    celebsInAllCapsNoSpaces.push(nameInAllCaps);
  }
  console.log(celebsInAllCapsNoSpaces);


// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

const favoriteCelebrity = 'Denzel Wash'; // Replace with your favorite celebrity

let found = false;

for (let i = 0; i < myCelebs.length; i++) {
  if (myCelebs[i] === favoriteCelebrity) {
    console.log(`Found my favorite celebrity: ${favoriteCelebrity}`);
    found = true;
    break;
  }
}

if (!found) {
  console.log(`My favorite celebrity (${favoriteCelebrity}) was not found in the array.`);
}


//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('fizz-buzz');
    } else if (i % 2 === 0) {
      console.log('fizz');
    } else if (i % 3 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
```

```output
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
the current index is ${i}
1
3
5
7
9
[
  'Lebron James',
  'Will Smith',
  'Jada Smith',
  'Denzel Wash',
  'Jack Black'
]
Lebron James
Will Smith
Jada Smith
Denzel Wash
Jack Black
Lebron James
Will Smith
Jada Smith
Jack Black
[ 'Lebron', 'Will', 'Jada', 'Denzel', 'Jack' ]
[ 'James', 'Smith', 'Smith', 'Wash', 'Black' ]
[ 'a', 'e', 'i', 'o', 'u' ]
e
o
i
a
a
e
e
a
L
 
J
W
 
S
J
 
S
D
 
W
J
 
B
[
  'LEBRON-JAMES',
  'WILL-SMITH',
  'JADA-SMITH',
  'DENZEL-WASH',
  'JACK-BLACK'
]
Found my favorite celebrity: Denzel Wash
fizz-buzz
1
fizz
buzz
fizz
5
fizz-buzz
7
fizz
buzz
fizz
11
fizz-buzz
13
fizz
buzz
fizz
17
fizz-buzz
19
fizz
buzz
fizz
23
fizz-buzz
25
fizz
buzz
fizz
29
fizz-buzz
```