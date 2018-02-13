 //computers random choice
 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 //Setting all to zero
 var wins = 0;
 var losses = 0;
 var guesses = 15;
 var guessesLeft = 15;
 var guessedLetters = [];
 var letterToGuess = null;

 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; var updateGuessesLeft = function () {
     // guessesLeft displayed on html
     document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
 };
 var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  var updateGuessesSoFar = function() {
    // displays guesses in lettersGuessed div
    document.querySelector("#lettersGuessed").innerHTML = "Your Guesses so far: " + guessedLetters.join(" ");
  };
 
  
  
  //on key release
  document.onkeyup = function(event) {
      guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();
  
          if (guessesLeft > 0){
              if (userGuess == letterToGuess){
                  wins++;
                  document.querySelector("#wins").innerHTML = "Wins: " + wins;
                  alert("Yes, you are psychic!");
                  reset();
              }
          }else if(guessesLeft == 0){
              // if you run out of guesses
              losses++;
              document.querySelector("#losses").innerHTML = "Losses: " + losses;
              alert("You suck, try again!");
              // reset. 
              reset();
          }
  };
   // reset function
var reset = function() {
    totalGuesses = 15;
    guessesLeft = 15;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  }
  
  updateLetterToGuess();
  updateGuessesLeft();