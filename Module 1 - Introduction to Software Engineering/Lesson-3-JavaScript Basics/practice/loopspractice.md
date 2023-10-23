```js
// 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
//      Each loop it should log to the console the current index

for(let i = 0; i <= 20; i++){
    console.log(i)
}
// 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
//      Each loop it should log to the console the current index

for(let i = 1; i <= 40; i+=2){
    console.log(i)
}


// 3.   Create an array with all student names in it. 
//      Loop over the array and log each student's name to the console.
//      Inside the array declare an un-required, but useful variable for 'currentStudent'

let studentNames = ["anton chislom", "judah gibbs", "nonny price"]
for(let i = 0; i < studentNames.length; i++){
        let currentStudent = studentNames[i]
        console.log(currentStudent)
}


// 4.   Use the array below for the following question
//      Loop over the numArray & ONLY log even numbers to the console.
//      2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
        const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
        for(let i=0; i < numArray.length; i++){
                if(numArray [i]% 2 ===0){
                        console.log(numArray[i])
                }
        }

// 5.   Use the above numArray array for this question
//      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers
const numArray1 = [5,3,2,1,10,20,30,22,30,22,33,12,11,9,6,3]



// 6.   Using the nums and the two empty placeholder arrays below
//      Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers

        const nums = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
        const positiveArr = [];
        const negativeArr = [];
```

```output
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
1
3
5
7
9
11
13
15
17
19
21
23
25
27
29
31
33
35
37
39
anton chislom
judah gibbs
nonny price
2
10
20
30
22
12
6
```