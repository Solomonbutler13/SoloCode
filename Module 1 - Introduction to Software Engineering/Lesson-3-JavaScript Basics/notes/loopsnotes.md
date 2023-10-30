```js
//check each letter against all vowels
// Use 2 for loops

const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."

const vowels = ['a','e','i','o','u'];

// For Loop - Itterate through the quote
for (let i = 0; i < famousQuote. length; i++){
// For loop - Itterate tghrough the vowels 
for (let j = 0; j < vowels. length; j++){
// does currentLetter === currentVowel ?
// yes - Log currentLetter
// No - Continue
    if (famousQuote[i] === vowels[j]){
        console.log (famousQuote[i]);
        vowelCount++;
    }
}   
}
console.log(vowelCount)
```

```output
o
/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:19
vowelCount++;
^

ReferenceError: vowelCount is not defined
    at Object.<anonymous> (/private/var/folders/9_/z98_bhgn4tl5cj8v3l53pq6w0000gn/T/md-notebook/main.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.0
```