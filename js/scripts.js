function beepBoop(userInput) {
  const orderedNumbers = [];
  if (userInput <= 0) {
    return "This application is only for numbers that are greater than 0! Please enter a different number."
  }
  for (i = 0; i <= userInput; i++) {
    numberString = i.toString();
    if (numberString.includes("3")) {
      orderedNumbers.push("Won't you be my Neighbor?");
    } else if (numberString.includes("2")) {
        orderedNumbers.push("Boop!");
    } else if (numberString.includes("1")) {
        orderedNumbers.push("Beep!");
    } else {
        orderedNumbers.push(i);
    }
  }
  const output = orderedNumbers.join(", ");
  return output;
}
