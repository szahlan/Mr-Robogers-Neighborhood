# Mr. Roboger's Neighborhood
By **Sana Zahlan** 

## Technologies Used 
* HTML 
* CSS
* Bootstrap 
* JavaScript 
* jQuery

## Description 
This application takes a number from the user and uses arrays and a for loop to return a range of numbers from 0 to the inputted number. The resulting range also includes strings that replace numbers conaining 1, 2, or 3. 

## Setup & installation
You can follow [this link](https://szahlan.github.io/Mr-Robogers-Neighborhood/) to view the page in your browser!

You can also clone this repository, access the project folder on your computer and finally open the index.html file in your browser.

## Known Bugs
This page currenlty has no known bugs.

## License 
MIT 

Copyright (c) 2022 Sana Zahlan 

## Tests

Describe: beepBoop()

Test: "It should return an array that starts with 0 and ends with the user input."
Code:
beepboop(3);
Expected Output: [0, 1, 2, 3]

Test: "It should return true if any of the numbers in the array contain 1, 2, or 3"
Code: 
beepBoop(5);
Expected Output: [0, true, true, true, 4, 5]

Test: "It should return "Won't you be my neighbor?" if any of the numbers in the array contain 3."
Code:
beepBoop(5);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "It should return 'Boop!' for numbers that contain 2, unless they also contain 3."
Code:
beepBoop(23);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]

Test: "It should return 'Beep!' for any numbers that contain 1, unless they also contain 2 or 3."
Code: 
beepBoop(14);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

Test "It should return output with numbers and proper string replacements separated by commas, rather than returning an array." 
Code:
beepBoop(14); 
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"

Test: "It should alert user to enter a numbe bigger than 0 if they enter a negative number or a 0"
Code: 
beepBoop(-5);
Expected Output: "This application is only for numbers higher than 0! Please enter a different number."

Test: "It should return a message prompting the user to input a number if they try to submit an empty form." 
Code: 
beepBoop();
Expected Output: "Please enter a number!"
