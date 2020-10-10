/** Sum Strings as Numbers
 * Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
 */

function sumStrings(a, b) {
  let aArr = a.split("").reverse();
  let bArr = b.split("").reverse();
  let resArr = [];
  let carry = 0;
  for (let i = 0; i < Math.max(aArr.length, bArr.length); i++) {
    let tempSum = (+aArr[i] || 0) + (+bArr[i] || 0) + carry;
    if (tempSum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    resArr.push((tempSum % 10).toString());
  }
  if (carry > 0) {
    resArr.push(carry);
  }
  if (resArr[resArr.length - 1] === "0") {
    resArr.pop();
  }
  return resArr.reverse().join("");
}

let num1 = "712569312664357328695151392";
let num2 = "8100824045303269669937";
console.log(sumStrings(num1, num2)); // 712577413488402631964821329
console.log(sumStrings("00103", "08567")); // 8670
