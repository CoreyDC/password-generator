
/* GLOBAL VARIABLES */

/*  */
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', ':', ';', '?', '/', '>', '<'];
const uppers = letters.map(element => {
  return element.toUpperCase();
});

let passwordCreate;

const generateBtn = document.querySelector("#generate");

/* PROGRAM STARTS ON THE CLICK HERE */
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
 
function generatePassword() {
  window.alert('Lets Generate a random password between 8 and 128 characters!');
  characterTypes();

  const characterAmount = window.prompt('How many characters would you like you password to be (between 8-128)');
  let random = Math.floor( Math.random() * passwordCreate.length );
  let randomCharacter = passwordCreate[random];

    let i = 0;
    while ( i <= characterAmount ) {
      console.log(randomCharacter);
      i++;
    }
  

  
}




/* FUNCTION TO RECIEVE INPUT FROM THE USER BASED ON WHAT CHARACTERS THEY WANT IN PASSWORD */
function characterTypes() {
  let hasLetters = window.confirm('Do you want letters in your password?');
  let hasNumbers = window.confirm('Do you want numbers in your password?');
  let hasSpecials = window.confirm('Do you want special characters in your password?');
  let hasUpperCase = window.confirm('Do you want Upper and lower case letters?');

  if ( hasLetters ) {
    passwordCreate = letters;
  }
  if ( hasNumbers ) {
    passwordCreate = numbers;
  }
  if ( hasSpecials ) {
    passwordCreate = specials;
  }
  if ( hasUpperCase ) {
    passwordCreate = uppers;
  }
  if ( hasLetters && hasNumbers ) {
    passwordCreate = letters.concat(numbers);
  }
  if ( hasLetters && hasSpecials ) {
    passwordCreate = letters.concat(specials);
  }
  if ( hasLetters && hasUpperCase ) {
    passwordCreate = letters.concat(uppers);
  }
    if ( hasNumbers && hasSpecials ) {
    passwordCreate = numbers.concat(specials);
  }
  if ( hasSpecials && hasUpperCase ) {
    passwordCreate = specials.concat(uppers);
  }
  if ( hasLetters && hasNumbers && hasSpecials ) {
    passwordCreate = letters.concat(numbers).concat(specials);
  } 
  if ( hasNumbers && hasSpecials && hasUpperCase ) {
    passwordCreate = numbers.concat(specials).concat(uppers);
  }
  if ( hasLetters && hasNumbers && hasSpecials && hasUpperCase ) {
    passwordCreate = letters.concat(numbers).concat(specials).concat(uppers);
  }
}

