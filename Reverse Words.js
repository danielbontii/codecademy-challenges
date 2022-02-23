// Reverse Words
// Write a wordReverser() function that will take a given string and reverse the order of the words. You may assume that the string is a sentence that contains only letters and spaces, with all words separated by one space.

// For example, wordReverser("Codecademy rules") should return "rules Codecademy" and wordReverser("May the Fourth be with you") should return "you with be Fourth the May".

//SOLUTION 1
function wordReverser(phrase) {
  const phraseArr = phrase.split(" ");
  let reversed = "";
  for (let i = phraseArr.length - 1; i >= 0; i--) {
    if (i === 0) {
      reversed += phraseArr[i];
    } else {
      reversed += phraseArr[i] + " ";
    }
  }
  return reversed;
}

console.log(wordReverser("Codecademy rules"));
