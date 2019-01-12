// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
  let sortedStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  let sortedStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  //sort() only apply to array, so we got to split it and then join it.
  return sortedStringA === sortedStringB;
}


// function countChar(str) {
//   let count = {};
//   let letterOnlyStr = str.replace(/[^\w]/g, '').toLowerCase(); //replace all non-letter to empty string
//   for (const char of letterOnlyStr) {
//     if (count[char]) {
//       count[char] += 1;
//     } else {
//       count[char] = 1;
//     }
//   }
//   return count;
// }
//
// function anagrams(stringA, stringB) {
//   const countA = countChar(stringA)
//   const countB = countChar(stringB)
//   if ( Object.keys(countA).length !== Object.keys(countB).length ) {
//     return false;
//   } else {
//     for (const char in countA) {
//       if (countA[char] !== countB[char]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

module.exports = anagrams;
