```js
/* Question 1
Write a hof function which returns the first number larger than 100 */
const nums = [23,89,300,45,2,120]

function findFirstNumberLargerThan100(arr) {
    return arr.find(number => number > 100);
  }
  
  const result = findFirstNumberLargerThan100(nums);
  console.log(result);
```

```output
300
```

```js
/* Question 2
Write a hof which lists a set of people based on their birth year */
const people = [
    { name: "Dan", birthYear: 1981 },
    { name: "Joe", birthYear: 2005 },
    { name: "Samantha", birthYear: 2000 },
    { name: "Jocelyn", birthYear: 1995 },
    { name: "Sasha", birthYear: 1997 },
    { name: "Tim", birthYear: 2003 },
];


people.forEach(element => console.log(element.birthYear));
```

```output
1981
2005
2000
1995
1997
2003
```

```js
/* Question 3
Given an array of cars only list cars that are build pre-2000 */
const cars = [{model: "Dodge", make: 2001},{model:"Ford", make:2012},{model:"Honda", make:1989},{model:"Hondi",make:1990}]

function carsPre2000(carArray) {
    return carArray.filter(car => car.make < 2000);
  }
  
  const pre2000Cars = carsPre2000(cars);
  console.log(pre2000Cars);
```

```output
[ { model: 'Honda', make: 1989 }, { model: 'Hondi', make: 1990 } ]
```

```js
/* Question 4
Given an array of phone numbers return an array of protected phone numbers so that it has this structure: 
[
    input: 555-555-5555,
    output: 5##-###-#555
]                                       */
const phoneNums = [
    "718-647-9876",
    "516-722-3845",
    "631-477-9988",
    "917-987-2125",
    "347-123-4567",
    ];

    function protectPhoneNumbers(phoneNumbers) {
        return phoneNumbers.map((phoneNumber) => {
          const [areaCode, ...rest] = phoneNumber.split("-");
          const protectedNumber = `${areaCode.charAt(0)}##-###-${rest.join("-")}`;
          return protectedNumber;
        });
      }
      
      const protectedPhoneNums = protectPhoneNumbers(phoneNums);
      console.log(protectedPhoneNums);
```

```output
[
  '7##-###-647-9876',
  '5##-###-722-3845',
  '6##-###-477-9988',
  '9##-###-987-2125',
  '3##-###-123-4567'
]
```

```js
/* Question 5
Given an array of numbers write a HOF that logs to the console:
    `Thats a big number!` if it's larger than 1000 or
    `This number isnt so big...` if its smaller than or equal to 1000 */
    const nums1 = [345,57,765,2345,1098,32,9876]


function logNumberStatus(numbers) {
    numbers.forEach((number) => {
      if (number > 1000) {
        console.log(`That's a big number!`);
      } else {
        console.log(`This number isn't so big...`);
      }
    });
  }
  
  logNumberStatus(nums1);
```

```output
This number isn't so big...
This number isn't so big...
This number isn't so big...
That's a big number!
That's a big number!
This number isn't so big...
That's a big number!
```

```js
/* Question 6
Given an array of people's names write a hof that returns only people with names longer than 5 characters
    Example
      ["Dan", "Joe", "Samantha", "Jocelyn", "Sasha", "Tim"] => ["Samantha", "Jocelyn", "Sasha"] */
      const peopleArray = ["Dan", "Joe", "Samantha", "Jocelyn", "Sasha", "Tim"]


function filterNamesByLength(names) {
  return names.filter(name => name.length > 5);
}

const longNames = filterNamesByLength(peopleArray);
console.log(longNames);
```

```js
/* Question 7
Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest */
const people1 = [
    { name: "Dan", age: 12 },
    { name: "Joe", age: 33 },
    { name: "Samantha", age: 67 },
    { name: "Jocelyn", age: 23 },
    { name: "Sasha", age: 65 },
    { name: "Tim", age: 25 },
];


function filterAndSortPeople(people) {
    const filteredPeople = people.filter(person => person.age > 20 && person.age < 35);
    const sortedPeople = filteredPeople.sort((a, b) => a.age - b.age);
    return sortedPeople;
  }
  
  const results = filterAndSortPeople(people1);
  console.log(results);
```

```output
[
  { name: 'Jocelyn', age: 23 },
  { name: 'Tim', age: 25 },
  { name: 'Joe', age: 33 }
]
```

```js
/* Question 8
Given an array of objects, each object is representing food. The objects are structured like this:
    {name: 'banana', expiration: "Dec 21, 2022"}

Write a hof that will return the object representing the food item that will expire soonest
    Example:
        let food = [
            {name: 'banana', expiration: "Dec 21, 2022"},
            {name: 'steak', expiration: "Jan 5, 2022"},
            {name: 'milk', expiration: "Jan 8, 2022"},
        ]
        youHOF(food) => {name: 'steak', expiration: "Jan 5, 2022"}

    hint: JavaScript Date object may be helpful
        new Date(year, monthIndex, day)
        const d1 = new Date(2010, 3, 28) => April, 28, 2010
        You can compare dates using the > and < operators */
        const food = [
            { name: "Banana", exp: new Date(2023, 3, 21) },
            { name: "Steak", exp: new Date(2024, 0, 5) },
            { name: "Milk", exp: new Date(2024, 0, 8) },
            { name: "Eggs", exp: new Date(2023, 1, 28) },
            { name: "Bread", exp: new Date(2023, 11, 20) },
        ];


        function findSoonestExpiringFood(foodItems) {
            return foodItems.reduce((minExpiration, currentFood) => {
              if (currentFood.exp < minExpiration.exp) {
                return currentFood;
              }
              return minExpiration;
            });
          }
          
          const soonestExpiringFood = findSoonestExpiringFood(food);
          console.log(soonestExpiringFood);
```

```output
{ name: 'Eggs', exp: 2023-02-28T05:00:00.000Z }
```