```js
const myName = "Solomon".split("");
console.log (myName)

for (
let i=0;  //this is the current index
i < myName. length; // This is curentlly index
i < myName.length //this is the conditiona that must be met to continueloopng
i++  //this is the instructor that will increase the index by 1
){
    console.logs(myName [i])
}


const arrayOfNums = [5, 3, 2, 1, 0, 9, 10, 30, 55];


```

```output
/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:10
i++  //this is the instructor that will increase the index by 1
^

SyntaxError: Unexpected identifier 'i'
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