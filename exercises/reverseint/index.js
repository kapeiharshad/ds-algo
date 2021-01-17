// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString();
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }

  return Math.sign(n) * parseFloat(revStr);
}

reverseInt(-51);

module.exports = reverseInt;
