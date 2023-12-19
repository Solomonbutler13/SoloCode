```js
/* 1. Create a function that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.*/

function evenOrOdd(number) {
    if (number % 2 == 0){
      return "Even"
    }else{
      return "Odd"
      }
    }
```

```js
let evenOrOdd = (number) => {
    if(number % 2 === 0){
        return "Even"
    }
    return "Odd"  
}
console.log(evenOrOdd)
```

```js
const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even';
```