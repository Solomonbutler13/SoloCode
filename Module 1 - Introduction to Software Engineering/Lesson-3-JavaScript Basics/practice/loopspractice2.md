```js
// Reminder: control-c will kill an infinitely running node-process

// 1.   Write a while loop that loops over a string until it finds the letter "a"

let word = 'banana'
let currentIndex = 0

while (word[currentIndex] !== 'a'){
    currentIndex++
}
console.log(word[currentIndex])

// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100
//      Inside the while loop be sure to increase count by some number

let i = 0
while (i < 100) {
    console.log(++i, "count")
}
// or

let count = 1
 
while (count <= 100) {
  console.log(count)
  count += count/2
}

// Sum of all numbers from 1 to 100
let countUntil = 1
let sum = 0
while(countUntil <= 100) {
    sum += countUntil
    countUntil++
}
console.log(sum)
```

```output
a
1 count
2 count
3 count
4 count
5 count
6 count
7 count
8 count
9 count
10 count
11 count
12 count
13 count
14 count
15 count
16 count
17 count
18 count
19 count
20 count
21 count
22 count
23 count
24 count
25 count
26 count
27 count
28 count
29 count
30 count
31 count
32 count
33 count
34 count
35 count
36 count
37 count
38 count
39 count
40 count
41 count
42 count
43 count
44 count
45 count
46 count
47 count
48 count
49 count
50 count
51 count
52 count
53 count
54 count
55 count
56 count
57 count
58 count
59 count
60 count
61 count
62 count
63 count
64 count
65 count
66 count
67 count
68 count
69 count
70 count
71 count
72 count
73 count
74 count
75 count
76 count
77 count
78 count
79 count
80 count
81 count
82 count
83 count
84 count
85 count
86 count
87 count
88 count
89 count
90 count
91 count
92 count
93 count
94 count
95 count
96 count
97 count
98 count
99 count
100 count
```