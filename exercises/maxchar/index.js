// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }

  for (const char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
