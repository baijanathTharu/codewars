/** Count IP Addresses
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
 */
/* first try::
function ipsBetween(start, end) {
  let startArr = start.split(".").map((n) => Number(n));
  let endArr = end.split(".").map((n) => Number(n));
  let resArr = new Array(startArr.length);
  for (let i = startArr.length - 1; i >= 0; i--) {
    if (
      endArr[i] === 0 &&
      startArr[i] === 0 &&
      endArr[i - 1] - startArr[i - 1] > 0
    ) {
      temp = 255;
    } else if (endArr[i] < startArr[i]) {
      endArr[i - 1]--;
      temp = endArr[i] + 256 - startArr[i];
    } else {
      temp = endArr[i] - startArr[i];
    }
    resArr[i] = temp;
  }
  return resArr.reduce(function (a, b, idx, resArr) {
    return a + b;
  }, 0);
}
*/
function ipsBetween(start, end) {
  let startBin = start
    .split(".")
    .map((n) => Number(n).toString(2).padStart(8, "0"))
    .join("");
  let endBin = end
    .split(".")
    .map((n) => Number(n).toString(2).padStart(8, "0"))
    .join("");

  // 32 bit binary to decimal
  let sn = parseInt(startBin, 2);
  let en = parseInt(endBin, 2);
  return en - sn;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); // 256
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 246
