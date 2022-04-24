//Business Logic

function beepBoop(userInput) {
  const orderedNumbers = [];
  let output;
  if (userInput = " ") {
    output = "Please enter a number!"
  } else if (userInput <= 0) {
      output = "This application is for numbers that are greater than 0 only! Please enter a different number."
  } else {
      for (i = 0; i <= userInput; i++) {
        numberString = i.toString();
        if (numberString.includes("3")) {
          orderedNumbers.push("'Won't you be my Neighbor?'");
        } else if (numberString.includes("2")) {
            orderedNumbers.push("'Boop!'");
        } else if (numberString.includes("1")) {
            orderedNumbers.push("'Beep!'");
        } else {
            orderedNumbers.push(i);
        }
      }
      output = orderedNumbers.join(", ");
    }
  return output;
}

// User Interface Logic

$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    const number = $("#number").val();
    const output = beepBoop(number);
    $("#result").text(output);
  });
});
