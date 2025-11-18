function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) return "rock";
    else if (random < 0.66) return "paper";
    else return "scissor";
}

function getHumanChoice() {
    const input = prompt("Enter your choice (rock, paper, scissor):").toLowerCase();
    if (["rock", "paper", "scissor"].includes(input)) {
        return input;
    } else {
        console.log("Invalid choice!");
        return getHumanChoice();
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
            (human === "rock" && computer === "scissor") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissor" && computer === "paper")
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

        if (result === "win") humanScore++;
        if (result === "lose") computerScore++;

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
        console.log("--------------------------");
    }

    console.log("=== FINAL RESULT ===");
    if (humanScore > computerScore) {
        console.log("You win the GAME!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the GAME!");
    } else {
        console.log("The game is a TIE!");
    }
}

playGame();
