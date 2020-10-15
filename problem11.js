/** First non-repeating character
 * Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 */

function firstNonRepeatingLetter(s) {
  let isUpper = false;
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    s[i] === s[i].toUpperCase() ? (isUpper = true) : (isUpper = false);
    for (let j = 0; j < s.length; j++) {
      if (i !== j) {
        if (s[i].toLowerCase() === s[j].toLowerCase()) {
          count = count + 1;
        }
      }
    }
    if (count === 0) {
      return isUpper ? s[i].toUpperCase() : s[i].toLowerCase();
    }
  }
  return "";
}
console.log(firstNonRepeatingLetter("STress"));
