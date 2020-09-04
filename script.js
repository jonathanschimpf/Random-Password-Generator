// assignment code.

var generateBtn = document.querySelector("#generate");

// write password to the #password input.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// variables listed in arrays. 

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// begin the password generation.

function generatePassword() {
  userSelections = []

  // prompt user to choose a password length between 8 and 128.

  var passLength = parseInt(prompt("Choose a number between 8 and 128 for your password length."));
  while (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {

    // if user inputs numbers outside of the required length, or inputs a symbol/letter, prompt them to choose a valid number.

    alert("Please choose a valid number.");
    var passLength = parseInt(prompt("Choose a number between 8 and 128 for your password length."));
  }

// a series of questions confirming if the user would like to use numbers, special characters, upper case and/or lower case characters
// if they select none, no password is generated and the form will be reset.

  var numericQuestion = confirm("Do you want to use numeric characters?");

  if (numericQuestion === true) {
    userSelections = userSelections.concat(numeric)
  };

  var specialQuestion = confirm("Do you want to use special characters?");

  if (specialQuestion === true) {
    userSelections = userSelections.concat(special)
  };

  var upperQuestion = confirm("Do you want to use upper case characters?");

  if (upperQuestion === true) {
    userSelections = userSelections.concat(upper)
  };

  var lowerQuestion = confirm("Do you want to use lower case characters?");

  if (lowerQuestion === true) {
    userSelections = userSelections.concat(lower)
  }

  if (!numericQuestion && !specialQuestion && !upperQuestion && !lowerQuestion) {
    alert("You need to select at least one character type!");
    reset();
  }

  var result = ""

// a random password is generated here, based on the users selections.

  for (i = 0; i < passLength; i++) {
    result += userSelections[Math.floor(Math.random() * userSelections.length)];
  }
  return result;
}


// add event listener to generate button.

generateBtn.addEventListener("click", writePassword);






