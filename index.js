function getComputerChoice() {
     const random = Math.random();
     if (random < 0.33) return "rock";
     else if (random < 0.66) return "paper";
     else return "scissors";
}

function getHumanChoice() {
     while (true) {
          const input = prompt("Masukkan Pilihanmu (rock, paper, scissors):").toLowerCase();

          if (input === "rock" || input === "paper" || input === "scissors") {
               return input;
          }

          if (input === null) {
               console.log("cancelled");
               return null;
          }

          console.log("Not Valid! Try again. ");
     }
}

function playGame() {

     let humanScore = 0;
     let computerScore = 0;

     // playRound DIPINDAH ke dalam playGame
     function playRound() {
          const human = getHumanChoice();
          const computer = getComputerChoice();

          console.log(`You pick: ${human}`);
          console.log(`Computer picks: ${computer}`);

          if (human === computer) {
               console.log("DRAW!");
               return "draw";
          }

          if (
               (human === "rock" && computer === "scissors") ||
               (human === "paper" && computer === "rock") ||
               (human === "scissors" && computer === "paper")
          ) {
               console.log("You win the round!");
               return "win";
          }

          console.log("You lose the round!");
          return "lose";
     }

     // Main 5 ronde
     for (let i = 0; i < 5; i++) {
          const result = playRound();

          if (result === "win") {
               humanScore++;
          }

          if (result === "lose") {
               computerScore++;
          }

          console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
          console.log("--------------------------");
     }

     console.log(`===FINAL RESULT===`);
     if (humanScore > computerScore) {
          console.log(`You Win The Game!`);
     } else if (humanScore < computerScore) {
          console.log(`Computer Win The Game!`);
     }else{
          console.log(`Both of You Draw!`);
     }
}

playGame();
 