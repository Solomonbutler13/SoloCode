```js
// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number

const creditCardNum = '5558-3339-4422-9018'

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)

const last4SS = '7893'

// Initialize a variable called userId, set it equal to a fake user ID

const userID = 'Bobby West'

// Initialize a variable called password, set it equal to a fake password

const password = 'bigmoney23'

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password

let inputID = userID
let inputpass = password

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass

userID === inputID && password === inputpass
  ?  console.log ('creditCardNu: ',creditCardNum, '\n', 'last4SS: ',last4SS)
  :  console. log ('incorrect username or id')

// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'
```

```output
creditCardNu:  5558-3339-4422-9018 
 last4SS:  7893
```