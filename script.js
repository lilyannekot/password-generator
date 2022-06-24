// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

document.querySelector("#generate").addEventListener("click", generatePassword);

// var passLength = prompt("How long would you like your password to be? Enter a number between 8 and 128.");
// var charType = prompt("Do you want to include different character types in your password?");


  
function generatePassword = prompt("How long would you like your password to be?");

var passwordLength = prompt("How long would you like your password to be?")
 if (passwordLength < 8 || passwordLength > 129) {
    alert("Password must be between 8 and 128 characters long.")
 }
  
 if (confirm("Would you like your password to include upper case letters?"));
   
 if (confirm("Would you like your password to include lower case letters?"));

 if (confirm("Would you like your password to include numbers?"));

 if (confirm("Would you like your password to include special characters?"));


  // if (passwordLength <= 8) {
  //  alert("Password must be at least 8 characters long.");
  //  } else if (passwordLength => 128) {
  //    alert("Password must be 128 characters or less.")
  //  }

