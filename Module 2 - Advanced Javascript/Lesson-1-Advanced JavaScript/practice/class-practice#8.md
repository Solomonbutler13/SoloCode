```js
// .sort() Practice

/* Question 1
Write a HOF to sort an array of numbers from largest to smallest */
const nums = [1,25,6,3,88,45,0]

nums.sort((a,b)=> {
    if (a > b) {
        return 1
    }else if (a < b) {
        return -1 
    }else {
        return 0
    }
})
console.log(nums)


//or 
nums.sort((a,b)=>{return a-b
})
console.log (nums)
```

```output
[
   0,  1,  3, 6,
  25, 45, 88
]
[
   0,  1,  3, 6,
  25, 45, 88
]
```

```js
/* Question 2
Write a HOF to sort peoples names by their length */
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

partyPeople.sort((a, b) => {
    // return a.name.length - b.name.length
    if (a.name.length > b.name.length) {
      return 1
    } else if (a.name.length < b.name.length) {
      return -1
    } else {
      return 0
    }
  })
   
  console.log(partyPeople)
```

```js
/* Question 3
Write an HOF to sort an array of objects of people by their age youngest to oldest */
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]


partyPeople.sort((a, b) => {
    // return a.age - b.age
    if (a.age > b.age) {
      return 1
    } else if (a.age < b.age) {
      return -1
    } else {
      return 0
    }
  })
   
  console.log(partyPeople)
```

```js
/* Question 4
Write an HOF to sort an array of strings by the last letter of the string */
const strings = ['sam', 'john', 'daniel', 'vanessa']


```