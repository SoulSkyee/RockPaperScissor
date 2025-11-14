// math.random for function choice
function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) {
         return `rock`;
    } else if (random < 0.66) {
         return `paper`;
    }else{
         return `scissor`;
    }
}
console.log(getComputerChoice());

// # LEARN - Learn how to user input
// 1. basic
// const basic = prompt(`Input apapun`, `adi`);
// console.log(basic);

// human input func
function getHumanChoice() {
     const hChoice = prompt(`Enter your Choice(Rock, Paper, Scissor):`).toLocaleLowerCase();
    if (hChoice === `rock`) {
          return `rock`;
    } else if (hChoice === `paper`) {
          return `paper`;
    } else if (hChoice === `scissor`){
          return `scissor`;
    }
}
console.log(getHumanChoice());



