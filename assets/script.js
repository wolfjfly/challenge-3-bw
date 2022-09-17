// Assignment Code

// My global var's
var pwlength;
var wantNum;
var wantUppers;
var wantLowers;
var wantUppers;
var wantSpecChar;

const num = [0,1,2,3,4,5,6,7,8,9];
const uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specChar = ["!", "#", "$", "%", "&", "*", "+", "/", ">", "=", "<", "?", "~"];
var o1Array =[]; // build array with sleceted inputs from operator

// code from assignment
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;  
}

//Load selected options in to o1Array
function createRecipe(){
  if(wantNum){
    o1Array = o1Array.concat(num)
  }
  if(wantUppers){
    o1Array = o1Array.concat(uppers)
  }
  if(wantLowers){
    o1Array = o1Array.concat(lower)
  }
  if(wantSpecChar){
    o1Array = o1Array.concat(specChar)
  }
  console.log(o1Array);
};

// Prompt and confirm pop ups to get the users selection
function buildRecipe(){

  pwlength = prompt("Ok so you want a password\nTell me how long you want it to be\nEnter a number between 8 and 128.");
  console.log(pwlength);
    if(pwlength <= 7 || pwlength > 128){
      alert("Come on read the instructions buddy\nThe number NEEDS to be number between 8 and 128. ");
      return generatePassword();
    };

  wantNum= confirm("Hey you want them digits?\nClick ok for yes\nOtherwise click cancel for the next selection.");
    console.log("Wants to use numbers", wantNum);

  wantUppers = confirm("I bet you are an UPPERCASE letter kind for person\nClick ok for yes\nOtherwise click cancel for the next selection.");
    console.log("Wants to use uppercase letters", wantUppers);

  wantLowers = confirm("Now you are gonna want some lowercase letters sprinkled in there\nClick ok for yes\nOtherwise click cancel for the next selection.");
    console.log("Wants to use lowercase letters", wantLowers);

  wantSpecChar = confirm("Throw some special characters in there\nI dare you  Chicken\nClick ok for yes\nOtherwise click cancel for the next selection.");
    console.log("Wants to use special characters", wantSpecChar);

    if(wantNum === false && wantUppers === false && wantLowers === false && wantSpecChar === false){
      alert("Really you want a password, but you don't want any of my slections.\n                       Go away.");
    };
    return;
};

//Grabs the o1Array and uses the math.random to creat a password 
function makePassword(){
  var builtPassword = "";
  console.log(builtPassword)
  for(var i = 0; i < pwlength; i++){
    var random1 = Math.floor(Math.random () * o1Array.length);
    console.log(random1);
    var random2 = o1Array[random1];
    console.log(random2)
    builtPassword = builtPassword + random2;
  }
  return builtPassword;
};

//Logical flow generatePassword
function generatePassword(){
  buildRecipe();
  createRecipe();
  return makePassword();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);