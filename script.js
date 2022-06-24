// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for all possible character types
const abcLower = ["bcdefghijklmnopqrstuvwxyz"];
const abcUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const specialChar = ["!@#$%^&*~"];
const numbers = ["0123456789"];

// var askAbcLower = confirm("Would you like your password to include lower case letters?");
//var askAbcUpper = confirm("Would you like your password to include upper case letters?");
//var askspecialChar = confirm("Would you like your password to include special characters?");
//var askNumbers = confirm("Would you like your password to include numbers?");

// Function to ask user about password length
function promptMe() {
  var passwordLength = prompt("How long would you like your password to be? Between 8-128 characters.");
  if (passwordLength < 8 || passwordLength > 129) {
    alert("Password must be between 8 and 128 characters long.");

  } else if (askAbcLower) = confirm("Do you want to include lowercase letters in your password?");
}
  // } else if askAbcUpper =  confirm("Do you want to include uppercase letters in your password?"); {

  // } else if askSpecialChar = confirm("Do you want to include special characters in your password?")

// The confirm() method returns true if the user clicked "OK", otherwise false.

// Function combines all user responses and produces desired password
function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

// document.querySelector("#generate").addEventListener("click", generatePassword);

generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
  