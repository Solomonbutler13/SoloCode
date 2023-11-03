```js
// 1. Write a function that takes in 1 number and returns that number + 1

let myNum = 10;

myNum = addOne(myNum);

console.log(myNum);


function addOne(myNum){
    return myNum + 1;
}

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function sayGoodnight(name) {
    const message = `Goodnight, ${name}!`;
    return message;
  }
  const personName = "Solomon";
  const greeting = sayGoodnight(personName);
  console.log(greeting);


// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
const arrWithZero = [1,2,3,0,4,5]
const arrWithoutZero = [1,2,3,4,5]


function hasZero (arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] ===0) {

        return 'This array has the number zero in it'
    }
}
return "This array does not have the number zero in it";
}
console.log(hasZero(arrWithZero)); 
console.log(hasZero(arrWithoutZero));


// 4. Write a function that console logs 'hello world' 10 times to the console. 
function helloTimesTen () {
    for (let i = 0; i = 10; i++){
        console.log('hello world')
    }
}
// 5. Write the prior function utilizing a 'fat arrow' function

const sayHelloWorld = () => {
    for (let i = 0; i < 10; i++) {
      console.log("Hello, world");
    }
  };

```

```output
11
Goodnight, Solomon!
This array has the number zero in it
This array does not have the number zero in it
```