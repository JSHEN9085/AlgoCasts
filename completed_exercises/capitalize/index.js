// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArray = str.split(" ")
  let capitalized = [];

  for (const world of strArray) {
    const capitalizedWorld = world[0].toUpperCase() + world.slice(1);
    capitalized.push(capitalizedWorld)
  }
  return capitalized.join(" ")
}

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (let i = 1; i < str.length; i++) { iterate each letter and see if its left hand side is " ", if yes, capitalize that letter
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

module.exports = capitalize;
