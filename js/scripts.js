function beepBoop(userInput) {
  const userInputNumber = parseInt(userInput);
  const orderedNumbers = [];
  for (i = 0; i <= userInputNumber; i++) {
    iString = i.toString();
    if (iString.includes("1") || iString.includes("2") || iString.includes("3")) {
      orderedNumbers.push(true);
    } else {
        orderedNumbers.push(i);
    }
  }
  return orderedNumbers;
}
