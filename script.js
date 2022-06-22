// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

alert("What would you like to include in your password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
