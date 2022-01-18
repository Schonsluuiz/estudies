function highestLetter(str) {
  const lowerCaseString = str.toLowerCase();
  const lettersArray = lowerCaseString.split("");
  const sortedLetters = lettersArray.sort();
  return sortedLetters[sortedLetters.length - 1];
}
