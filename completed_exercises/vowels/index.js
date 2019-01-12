// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//regular expression. this is better
function vowels(str) {
  const vowels = str.match(/[aeiou]/gi) // g means don't stop after found the first match, i  is a modifier (modifies the search to be case-insensitive(not care about lower or upper case)).
  return vowels ? vowels.length : 0
}

// function vowels(str) {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;
//
//   for (const char of str) {
//     if (vowels.indexOf(char) >= 0){
//       count += 1;
//     }
//   }
//   return count;
// }

module.exports = vowels;
