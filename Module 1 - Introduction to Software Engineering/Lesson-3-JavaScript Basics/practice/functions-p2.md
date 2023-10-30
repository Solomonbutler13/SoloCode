```js
// 1. Write a function that multiplies 3 input numbers together.
function multiplyNumbers(num1, num2, num3) {
    return num1 * num2 * num3;
  }
  let threeNum = multiplyNumbers(2, 3, 4);
console.log(threeNum); 

//or



// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
function logOdds (num){
    for (let i = 1; i <= num; i += 2){
        console.log(i)
    }
}

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const names = ['Peter Parker', 'Bruce Wayne','Clark Kent']
const initials =[]
function getInitials (namesParam){
    for (let i = 0; i < namesParam. length; i++) {
        const name = namesParam [i]
        const nameArr = name.split(' ')
        const firstInitial = nameArr[0][0]
        const lastInitial =nameArr[1][0]
        initials.push(firstInitial + lastInitial)
    }
    return initials
    }
    console.log (getInitials(names))

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator

function arithma (num10, num20, sign){
    switch (sign) {
        case '+':
            return num10 + num20
            case '-':
                return num10 - num20
                case '*':
                    return num10* num20
                    case '/':
                        return num10 / num20
        default:
            return 'Invalid operator'

    }
}
console.log (arithma(10, 20, '+'))
console.log (arithma(10, 20, '-'))
console.log (arithma(10, 20, '*'))
console.log (arithma(10, 20, '/'))

// 5. Write a function which takes in two arrays and returns those arrays combined together. 

function combineArrays (arr1, arr2) {return arr1. concat(arr2)}
//or


```

```output
24
[ 'PP', 'BW', 'CK' ]
30
-10
200
0.5
```