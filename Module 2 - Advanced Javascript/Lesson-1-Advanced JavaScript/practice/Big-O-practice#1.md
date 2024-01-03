```js

```

```js
// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    // Operation Per Input
    }
}
// O(n) - Linear Time
```

```js
// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];
// Operation Once
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
    // Operation for each input after the first
        }
    }

    return max;
// Operation Once
}

// O(1) + O(n) -> O(n) - Linear Time
```

```js
// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]);
}
// 0(1)- constant Time
```

```js
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';
// Operation Once

    for(let i = 0; i < str.length; i+=2){
        newStr += str[i]
// Operation for every other element
    }

    return newStr;
// Operation Once
}
// 0(log n) + 0(1) + 0(1) -> 0(log n)- Logarithmic Time (because of the +=2)
```

```js
// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num  // operation once
}
// 0(1)- constant Time
```

```js
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num //operation Once
    return final * 3 // operation once
}
//0(1)- constant time
```

```js
// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = [] //operation once
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i]) //operation for each input
    }
    return arrReversed //operation once
}
//0(1) + 0(n) + 0(1) -> 0(n) - Linear Time
```

```js
// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined //operation once
    let total = 0 //operation once
    for (let i of arr1) {
      for (let j of arr2) { //iteration per input
        total += i * j   //operation for each input
      }
    }
    return total // operation once
}

//0(1) + 0(n^2) + 0(1) -> 0(n^2) - Quadratic Time
```

```js
// 10.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50); //opertation once

//0(1) - constant time


```

```js
// 11.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0); //opertation once
//0(1) - constant time
```

```js
// 12.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0 //opertation once
    for (let i = 1; i < arr.length; i *= 2) { //iterate through half the array
      numberOfLoops++
    }
    return numberOfLoops //operation once
  }

//logarithmic time
```

```js
// bonus question - What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
 
function logTime2(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      for (let j = 1; j < arr.length; j *= 2) {
        numberOfLoops++
      }
    }
    return numberOfLoops
}
```