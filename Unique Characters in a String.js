// Unique Characters in a String
// Write a uniqueCharacters() function that determines if any given string has all unique characters (i.e. no character in the string is duplicated). If the string has all unique characters, the function should return true. If the string does not have all unique characters, return false.

// For example, uniqueCharacters("apple") should return false.

function uniqueCharacters(stringIn) {
  if (stringIn.length < 1) {
    return new Error("Please supply a string");
  }
  const uniques = new Set(stringIn);
  return uniques.size === stringIn.length;
}

console.log(uniqueCharacters("apple"));
