// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//the best one
function reverse(str) {
  return str.split('').reduce( (reversed, character) => character + reversed, '')
}                          //accumulator, currentValue                    startingValue

// function reverse(str) {
//   let chat = str.split("");
//   return chat.reverse().join("");
// }
//
// function reverse(str) {
//   let reversedStr = "";
//   for (const chat of str){
//     reversedStr = chat + reversedStr
//   }
//   return reversedStr
// }

module.exports = reverse;
