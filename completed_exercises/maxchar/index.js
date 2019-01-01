// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};
  let mostChar = "";
  let appearTime = 0;

  for (const char of str) {
    if (count[char.toLowerCase()]) {
      count[char.toLowerCase()] += 1;
    } else {
      count[char.toLowerCase()] = 1;
    }
  }

  for (const key in count) {
    if (count[key] > appearTime) {
      appearTime = count[key];
      mostChar = key;
    }
  }
  return mostChar;
}

module.exports = maxChar;
