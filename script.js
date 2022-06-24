// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for all possible character types
var abcLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var abcUpper = ["A", "B", "C", "D", "E", "F", "'G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function to prompt users on what they'd like to include in their password
function askQuestions() {

  var passwordLength = prompt("How long would you like your password to be?")
  if (passwordLength < 8 || passwordLength > 129) {
      alert("Password must be between 8 and 128 characters long.")
  }
  
// The confirm() method returns true if the user clicked "OK", otherwise false.

  var askAbcLower = confirm("Would you like your password to include lower case letters?");

  var askAbcUpper = confirm("Would you like your password to include upper case letters?");
  
  var askspecialChar = confirm("Would you like your password to include special characters?");

  var askNumbers = confirm("Would you like your password to include numbers?");

}

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

document.querySelector("#generate").addEventListener("click", generatePassword);
