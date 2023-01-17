
// GLOBAL VARIABLES AND ARRAYS
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', ':', ';', '?', '/', '>', '<'];
const upperCaseLetters = letters.map(element => {
  return element.toUpperCase();
});
let userSelection = [];
let userPassword = [];

const passwordText = document.querySelector("#password");


/* PROGRAM STARTS ON THE CLICK on the button with the id #generate */
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// FUNCTION THAT RETURNS USER PASSWORD TO DOCUMENT
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
} 
 

// FUNCTION THAT GENERATES USER PASSWORD
function generatePassword() {
  userPassword.length = 0;
  window.alert("Generate a random password between 8 and 128 characters!");
  
  const characterAmount = window.prompt("How many characters would you like you password to be (between 8-128)");
  if ( characterAmount < 8 || characterAmount > 128 || isNaN(characterAmount) ) { 
    window.alert("Please type a number value between 8-128");
    return;
  }

  characterTypes();

  for ( let i = 0; i < characterAmount; i++ ) {
    userPassword.push( userSelection[Math.floor( Math.random() * userSelection.length )] );
  }
  
  return userPassword.join("");
}


// FUNCTION TO RECIEVE INPUT FROM THE USER BASED ON WHAT CHARACTERS THEY WANT IN PASSWORD 
function characterTypes() {
  let hasLetters = window.confirm("Do you want LOWER-CASE letters in your password?");
  let hasNumbers = window.confirm("Do you want NUMBERS in your password?");
  let hasSpecials = window.confirm("Do you want SPECIAL CHARACTERS in your password?");
  let hasUpperCase = window.confirm("Do you want UPPER-CASE letters in your password?");

  if ( hasLetters ) {
    userSelection = userSelection.concat(letters);
  }
  if ( hasNumbers ) {
    userSelection = userSelection.concat(numbers);
  }
  if ( hasSpecials ) {
    userSelection = userSelection.concat(specials);
  }
  if ( hasUpperCase ) {
    userSelection = userSelection.concat(upperCaseLetters);
  }
}

