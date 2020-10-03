/**
 * Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names) {
  let formattedString = "";
  if (!names.length) return "''";
  names.forEach((elm, idx) => {
    formattedString += elm.name;
    if (idx < names.length - 2) {
      formattedString += ", ";
    }
    if (idx === names.length - 2) {
      formattedString += " & ";
    }
  });
  return formattedString;
}

console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
// returns 'Bart & Lisa'

console.log(list([]));
// returns ''
