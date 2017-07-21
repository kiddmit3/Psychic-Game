// setting up global variables
  var userPick;
  var randy;
  var win = 0;
  var loss = 0;
  var guess = 10;
  var guessedLetters = [];

// Function that generates random letter from alphabet string 
  var answer = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
 function alphaRandy(){ 
  var answer = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphaRandy=alphabet[Math.floor(Math.random() * alphabet.length)];
 }


alphaRandy();
console.log(alphaRandy)


// Could not get reset function to work within document.onkeyup //

  // function reset(){
  //   alphaRandy();
  //   guess=10;
  //   guessedLetters=[];
  // }


// Display variable guesses left

  var guessLText = document.getElementById("guessesLeft");
  guessLText.textContent = guess;

//Display inital pic by finding id "pic" and inserting new src
  document.getElementById("pic").src="assets/you.jpg";

// START upon the action of user input

  document.onkeyup = function(event) {
    userPick = event.key;
    guessedLetters.push(userPick);
    guess--;
    document.getElementById("pic").src="assets/you.jpg";

    if (guess >= 1) {

      if (userPick === alphaRandy) {
          win++;
          alert("Wow! You must be psychic!");
          guess=10;
          guessedLetters=[];
          var answer = "";
          var alphabet = "abcdefghijklmnopqrstuvwxyz";
          alphaRandy=alphabet[Math.floor(Math.random() * alphabet.length)];
          document.getElementById("pic").src="assets/winner.png";

      }
      else {
          guessedLetters.join(', ');
      }
    }  
    else {
      alert("You did not guess correctly. You Lose. It was "+ alphaRandy + ". " + "Go back to psychic school, bruh!");
      loss++;
      guess=10;
      guessedLetters=[];
      var answer = "";
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      alphaRandy=alphabet[Math.floor(Math.random() * alphabet.length)]; 
      document.getElementById("pic").src="assets/school.jpg";     


    }
 
  console.log("Computer answer: " + alphaRandy);  
  console.log("Wins: " + win);
  console.log("Losses: " + loss);
  console.log("Guesses: " + guess);
  

  // Inputing information from javascript into html id

  var user = document.getElementById("user");
  user.textContent = guessedLetters;

  var winText = document.getElementById("win");
  winText.textContent = win;

  var lossText = document.getElementById("loss");
  lossText.textContent = loss;

  var guessLText = document.getElementById("guessesLeft");
  guessLText.textContent = guess;
  }

