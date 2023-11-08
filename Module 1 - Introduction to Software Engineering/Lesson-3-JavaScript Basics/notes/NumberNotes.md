```js
let x = 5;
let y = 2;

// Multiplication \_
console.log('Multiplying x and y:');
console.log(x * y);
// Division /
console.log('Dividing x and y:');
console.log(x / y);
// Subtraction -
console.log('Subtracting x and y:');
console.log(x - y);
// Addition +
console.log('Adding x and y:');
console.log(x + y);
// Modulus (Remainder) %
console.log('Remainder when dividing x and y:');
console.log(x % y);



// Complex Arithmetic Operations

let z = 10;
let resultOne = x * y + z;
// (X \_ Y) + Z
// 10 + Z
// 10 + 10
// 20
console.log('The result of x _ y + z is:');
console.log(resultOne);

// The result of x * y + z is:
20


// Increment
let a = 1;
console.log(a++);
// a++ is the same as 1 _ 3
// Side Effect: a = a + 1
console.log(a++ + 3);
console.log(a);
console.log(++a * 3);
console.log(a);



// { Arithmitic Operator }= *=, /=, %=, +=, -=

// +=
let g = 1;
// g = g + 1;
g += 1;
console.log(g); //2

// -=
// g = g - 1;
g -= 1;
console.log(g); //1

// \*=
// g = g * 2;
g *= 2;
console.log(g); //2

// /=
// g = g / 2;
g /= 2;
console.log(g); //1

// %=
// h = h % 8;
let h = 52
h %= 8;
console.log(h); //4


// Powers
console.log(Math.pow(6, 2)); // 36
36
// Square Root
console.log(Math.sqrt(36)); // 6

function filterFriends(names) {
    const friendNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].length === 4) {
        friendNames.push(names[i]);
      }
    }
    return friendNames;
  }
  
  const inputNames = ["Ryan", "Kieran", "Jason", "Yous"];
  const friendList = filterFriends(inputNames);
  
  console.log(friendList);



```

```output
Multiplying x and y:
10
Dividing x and y:
2.5
Subtracting x and y:
3
Adding x and y:
7
Remainder when dividing x and y:
1
The result of x _ y + z is:
20
1
5
3
12
4
2
1
2
1
4
36
6
[ 'Ryan', 'Yous' ]
```