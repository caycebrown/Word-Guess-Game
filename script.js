var theme = [[83, 76, 79, 84,72], [67, 72, 85, 78, 75], [77, 79, 85, 84, 72], [77, 73, 75, 69, 89], [68, 65, 84, 65]]; //word bank

var randomNumPick = Math.floor(Math.random(theme)*theme.length); //generates a random number no larger than the word theme list

var wordPicker = theme[randomNumPick]; //uses randomly generated number to select a word from an array position

var dash = []; //creates empty string to be used for blank words

var guesses = [];

tries = 8;




//takes the randomly selected word and creates a string with 1 dash/character
    function underScore() {
        x = 0;
        while (x < wordPicker.length) {
        x += 1;
        dash.push('_');

        }

        let content = document.getElementById('blankword');
        content.textContent = dash.join(' ');

    };

//This allows us to test for key presses that are alphabetical and add them to the guesses array
    document.onkeyup = function(event) {
        inputCode = event.keyCode;
        input = event.key;

        if (inputCode >= 65 && inputCode <= 90) { 
            validTest = (true);

        }else {
            validTest = (false);
        };

        if (validTest === (true) && guesses.includes(input) === (false)) {
            tries -= 1;
            guesses.push(input);
            $('#guessBank').append(input + ', ');
        
        }else {
            alert("Please enter a new letter key");
        }

        if (tries === 0){
            alert('you lose');
        }else {

        };

        if (wordPicker.includes(inputCode)) {
            x = wordPicker.indexOf(inputCode);
            dash[x] = (input);
            let content = document.getElementById('blankword');
            content.textContent = dash.join(' ');
        };

    };


//calling function -----> Need to update this to be called on button/key press
    underScore(); 






