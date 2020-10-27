/**
 * parseInt() reloaded
 * In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
 */

/* 
one:,
two:,
three:,
four:,
five:,
six:,
seven:,
eight:,
nine:,
ten:,
eleven:,
twelve:,
thirteen:,
fourteen:,
fifteen:,
sixteen:,
seventeen:,
eighteen:,
nineteen:,
//
twenty:,
thirty:,
forty:,
fifty:,
sixty:,
seventy:,
eighty:,
ninety:,
hundred
thousand
million
*/

// "seven hundred eighty-three thousand nine hundred and nineteen"
// (7 * 100 + 83) * 1000 + 9 * 100 + 19

function parseInt(string) {
  const basicNumbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  const tens = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  const multiples = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  let res = 0;
  let noAddRes = 0;

  const basicNumbersArr = Object.keys(basicNumbers);
  const multiplesArr = Object.keys(multiples);

  string.split(" ").forEach((word, id) => {
    if (basicNumbersArr.includes(word)) {
      noAddRes += basicNumbers[word];
    } else if (multiplesArr.includes(word)) {
      if (word === "hundred") {
        noAddRes = noAddRes * multiples[word];
      } else {
        res = noAddRes * multiples[word];
        noAddRes = 0;
      }
    } else if (word.includes("-")) {
      const splitTens = word.split("-");
      const temp = tens[splitTens[0]] + basicNumbers[splitTens[1]];
      noAddRes += temp;
    }
  });

  return noAddRes ? res + noAddRes : res;
}

// console.log(parseInt("two hundred forty-six")); // 246
console.log(parseInt("two thousand five hundred ninety nine")); // 2599

// console.log(
//   parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
// ); //783919
console.log(parseInt("one million"));
