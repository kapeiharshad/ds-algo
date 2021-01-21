// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //   const vowel = ["a", "e", "i", "o", "u"];
  //   let count = 0;
  //   for (const i of str) {
  //     for (const j of vowel) {
  //       if (i.toLowerCase() === j) {
  //         count++;
  //       }
  //     }
  //   }

  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const i of str) {
    let check = vowel.includes(i.toLowerCase());
    if (check) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
