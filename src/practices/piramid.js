const character = "#";
const count = 8;
const rows = [];
let inverted = true;

/**
 * @desc Method to repeat " " empty string and fill it with a character # string
 * @param {Number} rowNumber 
 * @param {Number} rowCount 
 * @returns 
 */
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
/**
 * @desc Next iterations do just the same. Iterate rows in order tu push it using padRow method to finally create the rows pyramid
 */
/**
 * @desc Way 1
 */
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
/**
 * @desc Way 2
 */
// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }
/**
 * @desc Way 3
 */
// for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }
/**
 * @desc Way 4
 */
// for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }
/**
 * @desc Iterate rows array and print pyramid
 * @returns 
 */
  let result = ""
  for (const row of rows) {
    result = result + "\n" + row;
  }
  console.log(result);
