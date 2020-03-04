// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Variables:
var passwordLength = 0;
var specialCharacters = 'n';
var numbers = 'n';
var uppercase = 'n';
var lowercase = 'n';
var validInput = false;

//Global Arrays:
var specialCharsList = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',  '{', '}', '[', ']', '-', '_', '.'];
var numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

        passwordLength = setLength();

        if (passwordLength === null) { //if cancel button is clicked, return null:
            return null;
        }
        console.log("password length: " + passwordLength);

        function setLength() {

            //run the loop until valid input is received:
            while (!validInput) {
    
              //prompt the user for the password length:
              var input = prompt("Enter the password length. Must be a minimum of 8 characters and a maximum of 128 characters.");
        
                if (input === null) { //if cancel button is clicked, return null:
                  reset();
                  return input;
                }
                else {
                  input = parseInt(input); //convert input to a number
        
                  var isNum = !isNaN(input); //if input is a number, store true/false
        
                  if (isNum) {
                    //if input is a number, check whether it's between 8 and 128 and return it:
                    if (input >= 8 && input <= 128) {
                      return input;
                    }
                    else {
                      //if number is not in range, run the while loop again:
                      validInput = false;
                    }
                  }
                  else {
                    //if input is not a number, run the while loop again:
                    validInput = false;
                  }
                  //input is not valid, display error:
                  alert('Invalid input. Must be an integer number between 8 and 128.');
                }
                
            }
            
          }

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
