// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'
 
let word = 'fantastic'
for (let i = 0; i < word.length; i++){
    if (word[i] === 'a'){
        console.log(world[i])
        break
    }
}


// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'
let input = ['a','b','c',100,'e']

for (let i = 0; i < input. length; i++){
    if (typeof input[i]=== 'number'){
        console.log(`At index ${i} there is the number ${input[i]}`)
        break
    }   else {
        console.log(`At index ${i} there is not a number`)
    }
}


// 3.   Using the continue keyword loop over an array of numbers & strings



input = ['a','b','c',100,'e']
let arrOfStrings = []
for (let i = 0; i < input. length; i++){
    
    //      If the current element is a number skip it
    if (typeof input[1]=== 'number') {
        continue
    }
    //      Otherwise add the element to an array
    arrOfStrings.push(input[i])
}
//      After finishing the loop log the new array to the console
console.log(arrOfStrings)