```js
// 1.   Create an array that contains two of your favorite things to do

let myFavs = ['dj', 'bikes']
console.log (myFavs)

// 2.   Using an array method, add another thing you like to do to that list

myFavs.push ('skate')
console.log (myFavs)

// 3.   Reverse the order of the array (remember, if needed use MDN)

myFavs. reverse()
console.log(myFavs)

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array

let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(week)

console.log(week.length)

// 5.   log the 4th element in the array

const holdString = week[4];
console.log(holdString)

// 6.   Remove the first element in the array. Log the new array and the element removed from the array

week.shift();
console.log(week)

console.log('Sunday')

// 7.   Put 'Sunday' back at the beginning of the array and log the new array

week.unshift('Sunday')
console.log(week)

// 8.   Remove the last element in the array. Log the new array and log the element removed

week.pop()
console.log(week)

console.log('Saturday')

// 9.   Add 'Saturday' back to the end of the array and log the new array

week.push('Saturday')
console.log(week)

//10.   Replace 'Thursday' with 'Friday Junior'


console.log(week.indexOf('Thursday'))




//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'



//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

let array1 = phone.concat(laptop)
console.log(array1)

//13.   Write a line of code to test if something is an array or not
let array2 = [1,2,3,4]
console.log(array2)

const Anarray = Array.isArray(array2);
console.log(Anarray)

```

```output
[ 'dj', 'bikes' ]
[ 'dj', 'bikes', 'skate' ]
[ 'skate', 'bikes', 'dj' ]
[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
7
Thursday
[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
Sunday
[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
Saturday
[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
4
[ 'iphone', 'android', 'MacBook', 'HP', 'Dell' ]
[ 1, 2, 3, 4 ]
true
```