// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);

// Function to ask user questions for generating password
function generatePassword() {

  // Arrays for all possible character types
  const abcLower = "abcdefghijklmnopqrstuvwxyz".split("");
  const abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const specialChar = "!@#$%^&*~".split("");
  const numbers = "0123456789".split("");
  let potentialChars = [];

  passwordLength = prompt("How long would you like your password to be? Between 8-128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      prompt("Password must be between 8 and 128 characters long. Try again.");
  } 

  passwordLowercase = confirm("Do you want to inlude lowercase letters in your password?");
  if (passwordLowercase) {
    alert("Your password will include lowercase letters.");
  } else alert("Your password will not include lowercase letters.");

  passwordUppercase = confirm("Do you want to include uppercase letters in your password?");
  if (passwordUppercase) {
    alert("Your password will include uppercase letters.")
  } else alert("You password will not include uppercase letters.");

  passwordSpecialChar = confirm("Do you want to include special characters in your password?");
  if (passwordSpecialChar) {
    alert("Your password will include special characters.")
  } else alert("Your password will not include special characters.");

  passwordNumbers = confirm("Do you want to include numbers in your password?")
  if (passwordNumbers) {
    alert("Your password will include numbers.")
  } else alert("Your password will not include numbers.");

  if (passwordLowercase === false && passwordUppercase === false && passwordSpecialChar === false && passwordNumbers === false) {
    alert("You must include at least one character type. Try again.");
  }

  // Groups together all possible selected character types
  if (passwordLowercase) {
    potentialChars = potentialChars.concat(abcLower);
  }

  if (passwordUppercase) {
    potentialChars = potentialChars.concat(abcUpper);
  }

  if (passwordSpecialChar) {
    potentialChars = potentialChars.concat(specialChar);
  }

  if (passwordNumbers) {
    potentialChars = potentialChars.concat(numbers);
   }

  for (let i =0; i < 10; i++) {
    console.log(i);
  }

  // Generates potential final password
  let finalPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let random =[Math.floor(Math.random() * potentialChars.length)];

    finalPassword = finalPassword + potentialChars[random];
    console.log(finalPassword);
  }
  return finalPassword;
  };

// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}