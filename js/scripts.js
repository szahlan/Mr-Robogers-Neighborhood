function beepBoop(userInput) {
  const orderedNumbers = [];
  for (i = 0; i <= userInput; i++) {
    numberString = i.toString();
    if (numberString.includes("3")) {
      orderedNumbers.push("Won't you be my Neighbor?");
    } else if (numberString.includes("2")) {
      orderedNumbers.push("Boop!");
    } else {
        orderedNumbers.push(i);
    }
  }
  return orderedNumbers;
}
