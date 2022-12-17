var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
 
generateBtn.addEventListener("click", writePassword);

// Assignment Code || ln 1

// Write password to the #password input || ln 3-9

// Add event listener to generate button || ln 11

// Create generatePassword() function

// Confirm do you want to include numbers?

// Confirm do you want to include Letters?

// Confirm do you want to include special characters?

// Confirm do you want lower and uppercase letters? 

// Prompt how many characters between 8 and 128 

// Generate password
