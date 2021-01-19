// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let charMapA = buildCharMap(stringA);
//   let charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (const i in charMapA) {
//     if (charMapA[i] !== charMapB[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// function buildCharMap(str) {
//   let obj = {};
//   for (const i of str.replace(/[^\w]/g, "").toLowerCase()) {
//     obj[i] = obj[i] ? obj[i] + 1 : 1;
//   }
//   return obj;
// }

function anagrams(stringA, stringB) {
  if (buildCharMap(stringA) === buildCharMap(stringB)) {
    return true;
  }
  return false;
}
function buildCharMap(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}

module.exports = anagrams;
