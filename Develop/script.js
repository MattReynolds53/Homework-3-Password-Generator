// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = [")", "!", "@", "#", "$", "%", "^", "&", "*", "(", "-", "_", "+", "=", "[", "]", "{", "}", "`", "~"];


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

  let concatArray = []

let passwordLength = prompt("What length would you like your password to be? Please pick a number 8-128.");
console.log(passwordLength);

if (passwordLength < 8) {
  return "Password too short. Please enter a valid number between 8-128";
}

if (passwordLength > 128) {
  return "Password too long. Please enter a valid number between 8-128.";
}

let choiceLowercase = confirm("Would you like to include lowercase letters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceLowercase);

if (choiceLowercase === true) {
  concatArray = [...lowercaseAlphabet, ...concatArray]; 
} ;

let choiceUppercase = confirm("Would you like to include uppercase letters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceUppercase);

if (choiceUppercase === true) {
  concatArray = [...uppercaseAlphabet, ...concatArray]; 
} ;

let choiceNumbers = confirm("Would you like to include numbers in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceNumbers);

if (choiceNumbers === true) {
  concatArray = [...numbers, ...concatArray]; 
} ;

let choiceSpecial = confirm("Would you like to include special characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceSpecial);

if (choiceSpecial === true) {
  concatArray = [...specialCharacters, ...concatArray]; 
} ; 

console.log(concatArray)

let finalPassword = "";


for (let i = 0; i < passwordLength; i++) {
  let numberRandom = Math.floor(Math.random()*concatArray.length);
  finalPassword = finalPassword + concatArray[numberRandom];
  console.log(concatArray[numberRandom]);
}
console.log(finalPassword)

  return finalPassword;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







