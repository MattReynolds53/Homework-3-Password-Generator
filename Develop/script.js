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

// if (passwordLength )
// try to work in .valueAsANumber thing

let choiceLowercase = confirm("Would you like to include lowercase letters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceLowercase);

if (choiceLowercase === true) {
  concatArray = [...lowercaseAlphabet, ...concatArray]; //do the same thing you did here for all of them
} ;

let choiceUppercase = confirm("Would you like to include uppercase letters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceUppercase);

if (choiceUppercase === true) {
  concatArray = [...uppercaseAlphabet, ...concatArray]; //do the same thing you did here for all of them
} ;

let choiceNumbers = confirm("Would you like to include numbers in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceNumbers);

if (choiceNumbers === true) {
  concatArray = [...numbers, ...concatArray]; //do the same thing you did here for all of them
} ;

let choiceSpecial = confirm("Would you like to include special characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
console.log(choiceSpecial);

if (choiceSpecial === true) {
  concatArray = [...specialCharacters, ...concatArray]; //do the same thing you did here for all of them
} ; 

// If I have my if statements separated, will that still concatinate the appropriate arrys based on the user selections for the confirms? Or should I compile my separated if statements into one if, else if, else statement?
console.log(concatArray)

let finalPassword = "";


// let password = "";
for (let i = 0; i < passwordLength; i++) {
  let numberRandom = Math.floor(Math.random()*concatArray.length);
  finalPassword = finalPassword + concatArray[numberRandom];
  console.log(concatArray[numberRandom]);
  //need to get all individual string into one combined strings (wihtin the For loop)
}
console.log(finalPassword)

  return finalPassword; //you need to return your password at the end or else it will come back undefined. 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







