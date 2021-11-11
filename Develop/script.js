// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = [")", "!", "@", "#", "$", "%", "^", "&", "*", "(", "-", "_", "+", "=", "[", "]", "{", "}", "`", "~"];
let concatinatedArrayPassword = []

let randomLowercaseAlphabet = Math.floor(Math.random()*lowercaseAlphabet.length);
let randomUppercaseAlphabet = Math.floor(Math.random()*uppercaseAlphabet.length);
let randomNumbers = Math.floor(Math.random()*numbers.length);
let randomSpecialCharacter = Math.floor(Math.random()*specialCharacters.length);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {


  let PasswordLength = prompt("What length would you like your password to be? Please pick a number 8-128.");
console.log(PasswordLength);
;
let choiceForLowercaseLetters = confirm("Would you like to include lowercase letters in your password? Please select 'OK' for yes or 'Cancel' for no.")
console.log(choiceForLowercaseLetters);

if (choiceForLowercaseLetters === true) {
  concatinatedArrayPassword = [...lowercaseAlphabet, ...concatinatedArrayPassword]; //do the same thing you did here for all of them
} else {
  concatinatedArrayPassword = [...concatinatedArrayPassword];
};

let choiceForUppercaseLetters = confirm("Would you like to include uppercase letters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceForUppercaseLetters);

if (choiceForUppercaseLetters === true) {
  concatinatedArrayPassword = [...uppercaseAlphabet, ...concatinatedArrayPassword]; //do the same thing you did here for all of them
} else {
  concatinatedArrayPassword = [...concatinatedArrayPassword];
};

let choiceForNumbers = confirm("Would you like to include numbers in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceForNumbers);

if (choiceForNumbers === true) {
  concatinatedArrayPassword = [...numbers, ...concatinatedArrayPassword]; //do the same thing you did here for all of them
} else {
  concatinatedArrayPassword = [...concatinatedArrayPassword];
};

let choiceForSpecialCharacters = confirm("Would you like to include special characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceForSpecialCharacters);

if (choiceForSpecialCharacters === true) {
  concatinatedArrayPassword = [...specialCharacters, ...concatinatedArrayPassword]; //do the same thing you did here for all of them
} else {
  concatinatedArrayPassword = [...concatinatedArrayPassword];
}

  return password; //you need to return your password at the end or else it will come back undefined. 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// let password = "";
// for (let i = 0; i < 128; i++) {
  
  
// }

