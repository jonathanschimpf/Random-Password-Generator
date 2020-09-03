// assignment Code
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



//variables in string format

//var lower = "abcdefghijklmnopqrstuvwxyz"
//var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//var numeric = "0123456789"
//var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
//variables in arrays (eyesore lol)
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




//var userChoices = [numeric, special, lower, upper];

var randomNumeric = numeric[Math.floor(Math.random() * numeric.length)];
var randomSpecial = special[Math.floor(Math.random() * special.length)];
var randomUpper = upper[Math.floor(Math.random() * lower.length)];
var randomLower = lower[Math.floor(Math.random() * upper.length)];


function generatePassword(length, userChoices) {
  var length = parseInt(prompt("Choose a number between 8 and 128 for the length of your password."));
  while (length < 8 || length > 128) {
    alert("Please choose a valid number.");
    i--;
  }
  //receive numeric

  //userchoices
  //confirm use of special characters
  var special = confirm("Do you want to use special characters?");
  //confirm use of upper
  var upper = confirm("Do you want to use upper case characters?");
  //confirm use of lower
  var lower = confirm("Do you want to use lower case character?");
  // combine value of password length with the "true" confirms

  var userChoices = {
    numericSpecial = numeric.concat(special),

    numericUpper = numeric.concat(upper),

    numericLower = numeric.concat(lower),

    specialUpper = special.concat(upper),

    specialLower = uppers.concat(lower),

    upperLower = upper.concat(lower),

    notSpecial = lower.concat(upper.numeric),

    notNumeric = lower.concat(upper.special),

    notUpper = numeric.concat(special.lower),

    notLower = numeric.concat(special.upper),

    allTypes = numeric.concat(special.upper.lower),
  }













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








//ORDER


//--------Click Button Generates Prompt -----------//


//--------Asks Password Length, Which determines Length -----------//

//--------After That: FOR loop confirming it's 8 or greater and 128 or less (numerics) -----------//

// alert("You must choose number between 8 and 128")

//--------Confirm use of special characters -----------//

//--------Confirm use of  lower case -----------//

//--------Confirm use of upper case -----------//

//if all four were false then .. alert("You must choose at least one type of character to build a password!")

// if you  do i-- it will send it to the first prompt

//------Randomly Generate Password up to length that user gives-----//


