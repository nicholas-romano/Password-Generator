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
    
        //if the password length has not already been set, ask the user for it, otherwise, move on to the next question:
        if (passwordLength === 0) {

          passwordLength = setLength();
          
          if (passwordLength === null) { //if cancel button is clicked, return null:
            return null;
          }

        }
        console.log("password length: " + passwordLength);

        //Ask if they want special characters:
        specialCharacters = yesOrNo("Do you want your password to contain special characters? Enter either 'y' for yes or 'n' for no.");
        if (specialCharacters === null) { //if cancel button is clicked, return null
          return null;
        }
        console.log("Special Characters? " + specialCharacters);
        //Ask if they want numbers:
        numbers = yesOrNo("Do you want your password to contain numbers? Enter either 'y' for yes or 'n' for no.");
        if (numbers === null) { //if cancel button is clicked, return null
          return null;
        }
        console.log("numbers? " + numbers);
        //Ask if they want uppercase letters:
        uppercase = yesOrNo("Do you want your password to contain uppercase letters? Enter either 'y' for yes or 'n' for no.");
        if (uppercase === null) { //if cancel button is clicked, return null
          return null;
        }
        console.log("Uppercase Letters? " + uppercase);
        //Ask if they want lowercase letters:
        lowercase = yesOrNo("Do you want your password to contain lowercase letters? Enter either 'y' for yes or 'n' for no.");
        if (lowercase === null) { //if cancel button is clicked, return null
          return null;
        }
        else if (specialCharacters === 'n' && numbers === 'n' && uppercase === 'n' && lowercase === 'n') {
            //if the user answered 'n' to all yes or no questions, alert them with an error and ask them the questions again:
            alert("You must have at least one of the criteria that was previously asked for.");  
            generatePassword();
        }
        console.log("Lowercase letters? " + lowercase);

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

          function yesOrNo(message) {

            //run the loop until valid input is received:
            while (!validInput) {
    
              //pass the appropriate message to the prompt:
              var input = prompt(message);
        
              if (input === null) { //if cancel button is clicked, return null:
                reset();
                return input;
              }
              else {
                input = input.toLowerCase(); //convert input to lowercase
        
                if (input === 'y' || input === 'n') { //check if input is either y or n
                  return input;
                }
                else {
                  //if input is not either y or n, run the while loop again:
                  validInput = false;
                }
                //input is not valid, display error:
                alert("Invalid input. Enter either 'y' for yes or 'n' for no.");
              }
              
            }
    
          }

           //reset all variables to their original values when the cancel button is pressed:
          function reset() { 
            passwordLength = 0;
            specialCharacters = false;
            numbers = false;
            uppercase = false;
            lowercase = false;
            validInput = false;
          }

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
