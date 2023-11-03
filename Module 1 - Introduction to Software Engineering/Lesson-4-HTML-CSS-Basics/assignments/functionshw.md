```js
/* 
1. **Array Multiplication**:
   Write a function that takes in an array of numbers and returns a new array containing the numbers multiplied by 2.
   - Example: If you pass in the array [2, 3, 4], the function should return [4, 6, 8]. */
    const inputArray = [2, 3, 4];
    
   const doubleNumbers = (arr) => {
      return arr.map(number => number * 2);
    };
   
  
    const doubledResult = doubleNumbers(inputArray);
    console.log(doubledResult);
/*
2. **String Length Check**:
   Write a function that takes in a string and a number, and returns true or false if the string's length is greater than the given number.
   - Example: string = "hello", number = 4, should return true.
   - Example: string = "hi", number = 4, should return false. */
   
   const inputString = "hello";
   
   function isLengthGreater(str, number) {
      return str.length > number;
    }
   const upto = 4;
    const result = isLengthGreater(inputString, upto);
    console.log(result);
/*
3. **Last Names Extraction**:
   Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only last names.
   - Example: array = ["Jane Doe", "Sam Brown", "Lucy Green"] returns ["Doe", "Brown", "Green"]. */
   const fullNames = ["Jane Doe", "Sam Brown", "Lucy Green"];
   const lastNames = extractLastNames(fullNames);

   function extractLastNames(fullNames) {
      const lastNames = fullNames.map(fullName => {
        const parts = fullName.split(" ");
        return parts[parts.length - 1];
      });
      return lastNames;
    }
    console.log (lastNames)
/*
4. **Personalized Message**:
   Write a function that takes in a person's name and their favorite color, and logs a string to the console saying that the color suits them.
   - Example: name = "Alice", color = "blue", returns "Blue really suits you, Alice!" */
   function complimentColor(name, color) {
      console.log(`${color} really suits you, ${name}!`);
    }
    complimentColor("Solomon", "blue");
/*
5. **Year to Century Conversion**:
   Write a function that takes in a year and returns the century it belongs to.
   - Example: year: 1999 returns "20th century".
   - Example: year: 2023 returns "21st century". */
   
   function Century(year) {
      const century = Math.ceil(year / 100); 
      const suffix = CenturySuffix(century); 
      return `${century}${suffix} century`;
    }
    
    function CenturySuffix(century) {
      if (century >= 11 && century <= 13) {
        return "th";
      }
    
      const lastDigit = century % 10;
    
      switch (lastDigit) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
    console.log(Century(1999));
    console.log(Century(2023));
```

```output
[ 4, 6, 8 ]
true
[ 'Doe', 'Brown', 'Green' ]
blue really suits you, Solomon!
20th century
21st century
```