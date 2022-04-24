function beepBoop(userInput) {
  const userInputNumber = parseInt(userInput);
  const orderedNumbers = [];
  for (i = 0; i <= userInputNumber; i++) {
    orderedNumbers.push(i);
  }
  return orderedNumbers;
}
