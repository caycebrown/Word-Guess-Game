$('#resetButton').click(function reset() {
    dash = [];
    guesses = [];
    $('#guessBank').text(" ");
    myFunction();
});



function myFunction() {
    var theme = [['s', 'l', 'o', 't','h'], ['c', 'h', 'u', 'n', 'k'], ['m', 'o', 'u', 't', 'h'], ['m', 'i', 'k', 'e', 'y'], ['d', 'a', 't', 'a']]; //word bank

    var dash = []; //creates empty string to be used for blank words
    
    var guesses = [];
    
    var num = Math.floor(Math.random(theme)*theme.length);//generates a random number no larger than the word theme list
    
    var wordPicker = theme[num]; //uses randomly generated number to select a word from an array position

    tries = 8;

    underScore();

    //creates blank word
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
        length = wordPicker.length + 1;
        word = wordPicker.join(' ');
        blank = dash.join(' ');
        if (word === blank) {
            document.onkeyup = null;
            return alert('congrats you won!');
        }else if (tries > 0) {

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

            if (wordPicker.includes(input)) {
                for(i = 0; i < wordPicker.length; i++) {
                    if (wordPicker[i] === input) {
                        dash[i] = (input);
                        let content = document.getElementById('blankword');
                        content.textContent = dash.join(' ');

                    };
                };
            };



        }else{
            document.onkeyup = null;
            return alert("You Lost");

        };
        

    };

          

};

myFunction();




