var theme = ["Sloth", "Chunk", "Mouth", "Mikey", "Data", "Brad", "Copperpot", "Willie", "Boondocks"]; ///word bank

var randomNumPick = Math.floor(Math.random(theme)*theme.length); ///generates a random number no larger than the word theme list

var wordPicker = theme[randomNumPick]; ///uses randobly generated number to select a word from an array position

var dash = ""; ///creates empty string to be used for blank words

///takes the randomly selected word and creates a string with 1 dash/character
function underScore() {
    x = 0;
    while (x < wordPicker.length) {
    x += 1;
    dash = dash + '_ '

    }
    var blankWord = document.getElementById("blankword")
    blankWord.document.write(dash);
};

underScore(); ///calling function -----> Need to update this to be called on button/key press



alert(dash);