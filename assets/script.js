const generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
 
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let confirmLetter = window.confirm('Do you want letters in your password?');
}

// Assignment Code || ln 1

// Write password to the #password input || ln 3-9

// Add event listener to generate button || ln 11

// Create generatePassword() function || ln 13

// Confirm do you want to include letters? 

// Confirm do you want to include numbers?

// Confirm do you want to include special characters?

// Confirm do you want lower and uppercase letters? 

// Prompt how many characters between 8 and 128 

// Generate password
