/**
 Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let newArr = [];
  num
    .toString()
    .split("")
    .reverse()
    .map((digit, id) => {
      if (digit * Math.pow(10, id)) {
        newArr.push(digit * Math.pow(10, id));
      }
    });
  return `'${newArr.reverse().join(" + ")}'`;
}

console.log(expandedForm(1205));
