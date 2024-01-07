// Okay, so you need to pass the string as parameter
// then make the string into an array
// and remove spaces?
// then loop through somehow, check if first letter equals last letter
// index 0 === array.length()
// or something?
const palindromes = function (palindrome) {
  let palindromeArray = palindrome.toLowerCase().replace(/[^a-z0-9]/g, "");
  return palindromeArray.split("").reverse().join("") === palindromeArray;
};

// Do not edit below this line
module.exports = palindromes;
