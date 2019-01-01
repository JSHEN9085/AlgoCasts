// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversedStr = str.split("").reverse().join("")
  return reversedStr === str
}

// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - 1 - i]
//   })
// } // wrose solution, because it made duplicated comparison.

// function palindrome(str) {
//   for (let i = 0; i < str.length/2; i++){
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// } // avoid duplicated comparison, but still not the fastest one


module.exports = palindrome;
