# Word-Guess-Game
Homework three word guess game

Things I need to make this work:
A list of random words (themed) ---> make array of possible words       ####

A way to choose random words ----> Math.floor(Math.random(array)*array.length)       #####
 
A way to keep the word hidden ---> using function to create an underscored blank version of word ie; "_ _ _ _ _ _ _" #####

A way to have place holder underscores for letter lengths -----> function underScore creates using length of word ########

A way to reveal letters in place of the underscores ----> maybe track index positions? for word[2] replace underscores[2] ???

A way to track player guesses ----> array?? how do I reset it each game??? 

A way to show guessed letters ----> same as above

A way to limit guesses ----> keyCount = 0 if document.onkeyup.includes(acceptedletters)   keyCount = keyCount + 1

A way to limit valid guesses -----> same as above need to create array of valid inputs

Win/lose parameters ---> if keyCount > 15 --> lose if underscores === word -->  then win

Instructions ---> html

ways to interact (buttons? typing only?) ----> hmmmm

Some sort of graphic??? ----> watch demo