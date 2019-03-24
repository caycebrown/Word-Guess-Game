$('#resetButton').click(function reset() {
    dash = [];
    guesses = [];
    blank = null;
    $('#guessBank').text(" ");
    $('#trievar').text(12);
    myFunction();
});

wins = 0


function myFunction() {
    var theme = [['s', 'l', 'o', 't','h'],
                 ['c', 'h', 'u', 'n', 'k'], 
                 ['m', 'o', 'u', 't', 'h'], 
                 ['m', 'i', 'k', 'e', 'y'], 
                 ['d', 'a', 't', 'a'],
                 ['c','o','p','p','e','r','p','o','t'],
                 ['f','r','a','t','e','l','l','i'],
                 ['b','o','o','t','y','t','r','a','p','s'],
                 ['w','i','l','l','y'],
                 ['i','n','f','e','r','n','o'],
                 ['g','o','o','n','d','o','c','k','s'],
                 ['t','r','u','f','f','l','e','s','h','u','f','f','l','e'],
                 ['b','a','b','y','r','u','t','h']]; //word bank

    var dash = []; //creates empty string to be used for blank words
    
    var guesses = []; //bank for guessed letters
    
    var num = Math.floor(Math.random(theme)*theme.length);//generates a random number no larger than the word theme list
    
    var wordPicker = theme[num]; //uses randomly generated number to select a word from an array position

    tries = 12; //countdown to lose parameter

     //!!!!!!!!!!!!! Need to move this variable to avoid being reset everytime myFunction is called.

    underScore();//fills html element with current guess words length in underscores " _ _ _ _ _ "

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
        $('#gooniesong')[0].play();
        

        if (tries >= 1) {

            inputCode = event.keyCode;
            input = event.key;

            if (inputCode >= 65 && inputCode <= 90) { 
                validTest = (true);

            }else {
                validTest = (false);
            };

            if (validTest === (true) && guesses.includes(input) === (false)) {
                tries -= 1;
                $('#trievar').text(tries);
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
                        word = wordPicker.join(' ');
                        blank = dash.join(' ');

                    };
                };
            };

            if (word === blank) {
                document.onkeyup = null;
                wins = wins + 1;
                $('#winvar').text(wins);
                return alert('Congrats you won!');

            }else{ //do nothing
            };

        }else {
            document.onkeyup = null;
            return alert("You Lost");

        };
        

    };

          

};

myFunction();




