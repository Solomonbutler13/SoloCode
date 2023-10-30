```js
// 1. Write a function that takes in 1 number and returns that number + 1

let myNum = 10;

myNum = addOne(myNum);

console.log(myNum);


function addOne(myNum){
    return myNum + 1;
}

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function goodnight (name) {return 'goodnight ${name}'}
    console.log (goodnighht('Solomon'))
   


// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
const arrWithZero = [1,2,3,0,4,5]
const arrWithoutZero = [1,2,3,4,5]

function hasZero (arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] ===0) return 'This array has the number zero in it'
    }
}
return ''



// 4. Write a function that console logs 'hello world' 10 times to the console. 
function helloTimesTen () {
    for (let i = 0; i = 10; i++){
        console.log('hello world')
    }
}

// 5. Write the prior function utilizing a 'fat arrow' function
const helloTimesTen = () => {for (let i = 0; i < 10; i++){console.log ('hello world')}}


```

```output
/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:43
const helloTimesTen = () => {for (let i = 0; i < 10; i++){console.log ('hello world')}}
      ^

SyntaxError: Identifier 'helloTimesTen' has already been declared
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