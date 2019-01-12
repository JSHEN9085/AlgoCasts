// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n, row = 0, level = "") {
  if (row === n){
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midPoint = Math.floor( (2 * n - 1) / 2)
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = "#"
  } else {
    add = " "
  }
  pyramid(n, row, level + add)
}


// function pyramid(n) {
//   const midPoint = Math.floor( (2 * n - 1) / 2 );
//   for (let row = 0; row < n; row++) {
//     let level = "";
//
//     for (let column = 0; column < (2 * n - 1); column++){
//       if (midPoint - row <= column && midPoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// my solution, seem to be not efficient
// function pyramid(n) {
//   let rount = 1;
//   let emptySpace = "";
//   let position
//   for (let i = 0; i < n - 1; i++) {
//     emptySpace += " ";
//   }
//   let row = emptySpace + "#" + emptySpace;
//   position = row.indexOf("#")
//   console.log(row);
//
//   while (rount < n) {
//     for (let j = 1; j < n; j++) {
//       row = row.split("")
//       row.splice(position - j, 1, "#");
//       row.splice(position + j, 1, "#");
//       row = row.join("");
//       console.log(row);
//     }
//     rount += (n - 1);
//   }
// }

module.exports = pyramid;
