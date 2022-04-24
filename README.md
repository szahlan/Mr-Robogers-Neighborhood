Describe: beepBoop()

Test: "It should return an array that starts with 0 and ends with the user input."
Code:;
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