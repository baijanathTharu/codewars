/** Not very secure
 * In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:
- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces / underscore
Outputs://
alphanumeric("Mazinkaiser") // true
alphanumeric("hello world_") // false
alphanumeric("PassW0rd") // true
alphanumeric("     ") // false
 */
// Characters code:
// 0 to 9 ==> 48 to 57
// A to Z ==> 65 to 90
// a to z ==> 97 to 122

function isValidCharacter(c) {
  let code = c.charCodeAt(0);
  if (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  )
    return true;
  return false;
}

function alphanumeric(string) {
  string = string.trim();

  if (!string) return false;

  for (let i = 0; i < string.length; i++) {
    let valid = isValidCharacter(string[i]);
    if (valid === false) return false;
  }
  return true;
}

console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false
