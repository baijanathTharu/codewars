/**
 * Common denominators

You will have a list of rationals in the form

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 

where all numbers are positive ints.

You have to produce a result in the form

 [ [N_1, D] ... [N_n, D] ] 

in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:

convertFrac([[1, 2], [1, 3], [1, 4]])`shouldBe` (6, 12), (4, 12), (3, 12)
 */

function findLcm(n1, n2) {
  let gcd = 1;
  for (let i = Math.min(n1, n2); i > 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
      break;
    }
  }
  let lcm = parseInt((n1 * n2) / gcd);
  return lcm;
}

function convertFrac(lst) {
  let denoArr = new Array();
  lst.forEach((n) => denoArr.push(n[1]));

  let lcm = denoArr.reduce((a, b, idx, denoArr) => {
    return findLcm(a, b);
  }, denoArr[0]);

  lst.map((arr, idx) => {
    arr[0] = "(" + arr[0] * (lcm / arr[1]);
    arr[1] = lcm + ")";
  });

  return lst.join("");
}

console.log(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
); // (6, 12), (4, 12), (3, 12)
