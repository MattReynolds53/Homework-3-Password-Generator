// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let firstPasswordChoice = prompt("What length would you like your password to be? Please pick a number 8-128.");
console.log(firstPasswordChoice);

let secondPasswordChoice = prompt("Would you like to include lowercase letters in your password? Please type 'Y' for yes or 'N' for no.")
console.log(secondPasswordChoice);

let thirdPasswordChoice = prompt("Would you like to include uppercase letters in your password? Please type 'Y' for yes or 'N' for no.")
console.log(thirdPasswordChoice);

let fourthPasswordChoice = prompt("Would you like to include numbers in your password? Please type 'Y' for yes or 'N' for no.")
console.log(fourthPasswordChoice);

let fifthPasswordChoice = prompt("Would you like to include special characters in your password? Please type 'Y' for yes or 'N' for no.")
console.log(fifthPasswordChoice);


let lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = [")", "!", "@", "#", "$", "%", "^", "&", "*", "(", "-", "_", "+", "=", "[", "]", "{", "}", "`", "~"];

let password = "";
for (let i = 0; i < 128; i++) {
  const element = array[index];
  
}

