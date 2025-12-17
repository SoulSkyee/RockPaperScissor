let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");

// bikin 2 div satu untuk hasil, satu untuk ronde.
const roundDiv = document.createElement("div");
roundDiv.classList.add("round");

const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");

// bikin winner Div
const winnerDiv = document.createElement("div");
winnerDiv.classList.add("winner");

resultDiv.textContent = "";
resultDiv.appendChild(roundDiv);
resultDiv.appendChild(scoreDiv);
resultDiv.appendChild(winnerDiv);

// bikin function untuk ngehandle pilihan
function handleClick(choice) {
     if (humanScore === 5 || computerScore === 5) return;
     const result = playRound(choice);
     // buat ngurusin pilihan user dan komputer
     roundDiv.textContent = `Kamu milih ${result[0]} dan komputer milih ${result[1]} hasilnya adalah ${result[2]}`;
     // buat ngurusin hasil round
     scoreDiv.textContent = `Skor kamu ${humanScore} dan Skor komputer ${computerScore}`;
     // buat kasih ronde
     if (humanScore === 5 || computerScore === 5) {
          if (humanScore === 5) {
               winnerDiv.textContent = "Kamu menang game!"
          } else if (computerScore === 5) {
               winnerDiv.textContent = "Komputer menang game!"
          }

           disableButton();
     }
}

function disableButton() {
     rockBtn.disabled = true;
     paperBtn.disabled = true;
     scissorsBtn.disabled = true;
}

// masukkin event listener
rockBtn.addEventListener("click", () => {
     handleClick("rock");
});
paperBtn.addEventListener("click", () => {
     handleClick("paper");
});
scissorsBtn.addEventListener("click", () => {
     handleClick("scissors");
});


function getComputerChoice() {
     const random = Math.random();
     if (random < 1 / 3) return "rock";
     else if (random < 2 / 3) return "paper";
     else return "scissors";
}

// function getHumanResult() {
//      while (true) {
//           const input = prompt("Masukkan Pilihanmu (rock, paper, scissors):").toLowerCase();

//           if (input === "rock" || input === "paper" || input === "scissors") {
//                return input;
//           }

//           if (input === null) {
//                console.log("cancelled");
//                return null;
//           }

//           console.log("Not Valid! Try again. ");
//      }
// }

function playRound(playerSelection) {
     const human = playerSelection;
     const computer = getComputerChoice();

     if (human === computer) {
          return [human, computer, "Draw!"];
     }

     if (human === "rock" && computer === "scissors" ||
          human === "paper" && computer === "rock" ||
          human === "scissors" && computer === "paper"
     ) {
          humanScore++;
          return [human, computer, "Win!"];
     }
     computerScore++;
     return [human, computer, "Lose!"];
}



// function playGame() {

//      let humanScore = 0;
//      let computerScore = 0;

//      // playRound DIPINDAH ke dalam playGame
//      // function playRound() {
//      //      const human = getHumanResult();
//      //      const computer = getComputerResult();

//      //      console.log(`You pick: ${human}`);
//      //      console.log(`Computer picks: ${computer}`);

//      //      if (human === computer) {
//      //           console.log("DRAW!");
//      //           return "draw";
//      //      }

//      //      if (
//      //           (human === "rock" && computer === "scissors") ||
//      //           (human === "paper" && computer === "rock") ||
//      //           (human === "scissors" && computer === "paper")
//      //      ) {
//      //           console.log("You win the round!");
//      //           return "win";
//      //      }

//      //      console.log("You lose the round!");
//      //      return "lose";
//      // }

//      // Main 5 ronde
//      for (let i = 0; i < 5; i++) {
//           const result = playRound();

//           if (result === "win") {
//                humanScore++;
//           }

//           if (result === "lose") {
//                computerScore++;
//           }

//           console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
//           console.log("--------------------------");
//      }

//      console.log(`===FINAL RESULT===`);
//      if (humanScore > computerScore) {
//           console.log(`You Win The Game!`);
//      } else if (humanScore < computerScore) {
//           console.log(`Computer Win The Game!`);
//      } else {
//           console.log(`Both of You Draw!`);
//      }
// }

// playGame();
