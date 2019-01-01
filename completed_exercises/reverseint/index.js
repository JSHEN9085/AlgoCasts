// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//this is better as it save memory(less code)
function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
  // parseInt is better than Number
  // if using Number -5, it will turn out NaN(because we got 5-)
  // by using parseInt, we will still get 5 instead of NaN
}

// function reverseInt(n) {
//   if (n >= 0){
//     return parseInt(n.toString().split('').reverse().join(''))
//   } else {
//     return parseInt(n.toString().slice(1).split('').reverse().join('')) * -1
//   }
// }

module.exports = reverseInt;
