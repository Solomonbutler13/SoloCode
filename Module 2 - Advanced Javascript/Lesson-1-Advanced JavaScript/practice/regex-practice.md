```js
// 1.   Write a function that tests if a string contains the string of '123' within it

let testString1 = '123 Easy Street'

const contains123 = (str) => {
    return str.match ('123')
}
```

```js
// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false

const acNFriends= (tstStr) => tstStr. match (/a.*c/) ?. length > 0
console.log (acNFriends ('abc'))
console.log (acNFriend('ca'))
```

```js
// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'

const countInstances = (str, subStr) => {
    return str.match(
        new RegExp(subStr, 'g')
    ) ?.length 
}

console.log (count)
```

```js
// 4.   Write a function that checks if all characters in a string are lowercase letters
```

```js
// 5.   Write a function that checks if a string has an uppercase letter
```

```js
// 6.   Write a function that checks if a string contains a dash or underscore 
```

```js
// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
```

```js
// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
```

```js
// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
```

```js
// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
```