```js
// 1.   Create an object for a celebrity and save it to a variable
const celebrity = {
fname: 'Solomon',
lname: 'Butler',
age:30
}


// 2.   Using dot-notation add 3 key-value pairs to the celebrity
celebrity. isAlive= true
celebrity. isMarried= false
celebrity. isFamous= true

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celebrity ['language']='English'
celebrity ['weight']= '150'
celebrity ['shoe-size']= '10.5'
console.log (celebrity)
// 4.   Write a function that allows us to add or update 3 properties
const addUpdate = (obj, key, value) => {
    obj [key] = value
}
addUpdate(celebrity, 'fname','Solomon')
// 5.   Using a loop - log all the celebrities properties to the console

for(let key in celebrity){
console.log(key)
}
```

```output
{
  fname: 'Solomon',
  lname: 'Butler',
  age: 30,
  isAlive: true,
  isMarried: false,
  isFamous: true,
  language: 'English',
  weight: '150',
  'shoe-size': '10.5'
}
fname
lname
age
isAlive
isMarried
isFamous
language
weight
shoe-size
```