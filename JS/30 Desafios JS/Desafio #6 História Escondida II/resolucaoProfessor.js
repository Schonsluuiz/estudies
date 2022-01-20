function invertWords(str) {
  const wordsArray = str.split(" ");
  const invertedWords = wordsArray.map((word) => {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord.split("").reverse().join("");
  });

  return invertedWords.join(" ");
}
