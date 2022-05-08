//Assignment Code
var charLength = 8;
var choiceArr =[];

// Different Password Variables
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers=[1,2,3,4,5,6,7,8,9,0]
var symbols=["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordText.value = " ";
} 
}

// start function to generate password using prompts
function generatePassword(){
  var password = "";
  for(var i = 0; i < charLength; i++){
    var randomChar = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomChar];
  }
  return password;
}
function getPrompts(){
  choiceArr= [];
  
  charLength= parseInt(prompt("How long do you want your password to be? Choose between 8 and 128 characters"));
  //if user types in something that is not a number between 8-128
  if(isNaN(charLength) || charLength < 8 || charLength > 128 ){
    alert("Must be a numerical digit between 8 and 128");
    return false;
  }
  // choices of types of characters
  if(confirm("Would you like uppercase letters in your password?")){
    choiceArr = choiceArr.concat(upperCase);
  }
  if(confirm("Would you like lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowerCase);
  }
  if(confirm("Would you like numbers in your password?")){
    choiceArr = choiceArr.concat(numbers);
  }
  if(confirm("Would you like special characters in your password?")){
    choiceArr = choiceArr.concat(symbols);
  }
  return true;
}


