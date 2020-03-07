# Password-Generator

This application generates a random password to the user based on criteria provided through the use of prompts.
Once the use clicks the "Generate a Password" button, the prompts are displayed in the following sequence:

1. Enter the password length. Must be a minimum of 8 characters and a maximum of 128 characters.
2. Do you want your password to contain special characters? Enter either 'y' for yes or 'n' for no.
3. Do you want your password to contain numbers? Enter either 'y' for yes or 'n' for no.
4. Do you want your password to contain uppercase letters? Enter either 'y' for yes or 'n' for no.
5. Do you want your password to contain lowercase letters? Enter either 'y' for yes or 'n' for no.

If the user does not provide the input criteria asked for, an error alert is displayed. Once the user clicks the 
Ok button, the same prompt question is asked again until either a valid response is entered, or the cancel button 
is pressed in which case a value of null is returned and the textbox is cleared (if there was any data already 
there from a previous password generated.)

If the user answers 'n' (no) to all of the 4 criteria asked, an error alert is displayed that says: "You must have 
at least one of the criteria that was previously asked for." In which case, the questions will start from question
2 (special characters) above and will reference the previously recorded answer for question 1 (password length) for 
this new sequence.

When all questions are answered with valid criteria, a newly generated password is displayed in the textbox above 
along with "Copy" button which is displayed above the "Generate Password" button. When this button is clicked, the 
password text is copied to the user's clipboard and they can now paste it inside another application. This button 
is removed and the textbox is cleared when the cancel button is pressed in a proceeding sequence, or the browser 
is refreshed.
