```js
// Vowels 
//write a function that takes a string and return a new string with all vowels removed.
// example string "This website is for losers LOL!"
// Answers

//1.
const vowels = 'aeiou';
function disemvowel() {
    return str
      .split('')
      .filter(letter => !vowels.includes(letter.toLowerCase()))
      .join('');
  }


  //2.
  const removeVowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
		return newStr;
		
	
};

//3.

```