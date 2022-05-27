// creates a random number between 0 and 2 then converts it to rock(0), paper(1) and scissors(2)
function computerPlay() {
  let ranNum = Math.floor(Math.random() * 3);
  if (ranNum === 0) {
    return "Rock";
  } else if (ranNum === 1) {
    return "Paper";
  } else if (ranNum === 2) {
    return "Scissors";
  }
}

let playerScore = 0; //player score start at 0
let computerScore = 0; //computer score starts at 0
let draw = 0;
// win/lose/draw results with string and + 1 to score
function playRound(playerSelection, computerSelection) {
  const winLoseRound = document.querySelector("#winLoseRound");
  if (playerSelection === computerSelection) {
    return (
      winLoseRound.setAttribute("style", "color: black"),
      (winLoseRound.textContent = `Draw! ${playerSelection} is equal to ${computerSelection}.`),
      (draw += 1)
    );
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return (
      winLoseRound.setAttribute("style", "color: green;"),
      (winLoseRound.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`),
      (playerScore += 1)
    );
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return (
      winLoseRound.setAttribute("style", "color: red;"),
      (winLoseRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`),
      (computerScore += 1)
    );
  }
}
// list of audio
const rockSound = new Audio(
  "sounds/424997__gregorquendel__rocks-effects-source-recordings-05.WAV"
);
const paperSound = new Audio("sounds/68221__xtyl33__paper2.WAV");
const scissorsSound = new Audio("sounds/372246__mxve__scissors.WAV");
const winSound = new Audio(
  "sounds/619035__mrrap4food__burst-of-a-short-clap.MP3"
);
const loseSound = new Audio("/sounds/178875__rocotilos__you-lose-evil.WAV");
// click of button triggers player selection, computer selection and start of round
const buttons = document.querySelectorAll("#buttonDiv");
buttons.forEach((button) => {
  button.addEventListener("click", (el) => {
    //plays sound affect
    if (el.target.id == "rock") {
      rockSound.play();
    } else if (el.target.id == "paper") {
      paperSound.play();
    } else if (el.target.id == "scissors") {
      scissorsSound.play();
    }
    // changes first letter to capital to match against computer selection
    const playerSelection =
      el.target.id.charAt(0).toUpperCase() + el.target.id.slice(1);
    const computerSelection = computerPlay();
    //starts playRound function
    playRound(playerSelection, computerSelection);
    //prints current scoreboard
    const scoreDiv = document.querySelector("#scoreDiv");
    scoreDiv.textContent = `Player Score : ${playerScore} Computer Score : ${computerScore} Draw : ${draw}`;
    //prints final scoreboard when first player wins five games
    const winLoseTotal = document.querySelector("#winLoseTotal");
    if (playerScore >= 5) {
      // alerts player they have won with final score and string and disables rock, paper, scissor buttons
      return (
        (winLoseTotal.textContent = `You Won!  Player: ${playerScore}  Computer: ${computerScore}`),
        winLoseTotal.setAttribute("style", "color: green;"),
        disableBtn(),
        winSound.play()
      );
    } else if (computerScore >= 5) {
      // alerts player they have lost with final score, audio, string and disables rock paper scissors buttons
      return (
        (winLoseTotal.textContent = `You Lose!  Player: ${playerScore}  Computer: ${computerScore}`),
        winLoseTotal.setAttribute("style", "color: red;"),
        disableBtn(),
        loseSound.play()
      );
    }
  });
});
// resets scores back to zero and enables rock, paper, scissors buttons
const resetDiv = document.querySelector("#resetDiv");
resetDiv.addEventListener("click", (el) => {
  return (
    (scoreDiv.textContent = `Player Score : 0 Computer Score : 0 Draw : 0`),
    (playerScore = 0),
    (computerScore = 0),
    (draw = 0),
    (winLoseRound.textContent = `again?`),
    (winLoseTotal.textContent = `Let's Go!`),
    enableBtn()
  );
});
// disables rock, paper, scissor buttons
function disableBtn() {
  document
    .querySelectorAll(".buttons")
    .forEach((button) => button.setAttribute("disabled", true));
}
// enables rock, paper, scissor buttons
function enableBtn() {
  document
    .querySelectorAll(".buttons")
    .forEach((button) => button.removeAttribute("disabled"));
}

//
//
//
//                    *******OLD CODE DON"T NEED!!!***********

// prompts player to input rock/paper/scissors then converts it to lowercase before changing the first character to upper case to match computer

// don't need the below with clickable buttons

// function playerPrompt() {
//   let playerInput = prompt("Please Choose Rock, Paper or Scissors");
//   playerInput = playerInput.toLowerCase();
//   let playerInputCased = " ";
//   if ((playerInput === "rock", "paper", "scissors")) {
//     playerInputCased =
//       playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
//   }
//   return playerInputCased;
// }

/////// DON"T NEED THIS EITHER

// console.log(playRound(playerSelection, computerSelection)); //  1 playRound function and console.log string
//       if (playRound(playerSelection, computerSelection).includes(`Win!`)) {
//         // if the string `Win!` is found in the return string plus 1 to player score
//         playerScore += 1;
//       } else if (
//         playRound(playerSelection, computerSelection).includes(`Lose!`)
//       ) {
//         // if the string `Lose!` is found in the return string plus 1 to computer
//         computerScore += 1;
//       } else if (
//         playRound(playerSelection, computerSelection).includes(`Draw!`)
//       ) {
//         // if the string `Draw!` is found in the return string plus 0 and i-- (to play another round)
//         i--;
//       } else if (
//         playRound(playerSelection, computerSelection).includes(`invalid`)
//       ) {
//         // if the string `invalid` is found in the return string plus 0 and i-- (to play another round)
//         i--;
//       }
//       console.log(`Player: ${playerScore}  Computer: ${computerScore}`);
//       // shows player/computer score after each round
//     }

////  ALSO DON'T NEED THIS

// plays one game, and returns if you draw/win/lose and why in a string
// function playRound(playerSelection, computerSelection) {
//   if (
//     (playerSelection === "Rock" && computerSelection === "Rock") ||
//     (playerSelection === "Paper" && computerSelection === "Paper") ||
//     (playerSelection === "Scissors" && computerSelection === "Scissors")
//   ) {
//     return `Draw! ${playerSelection} is equal to ${computerSelection}.`;
//   } else if (
//     (playerSelection === "Rock" && computerSelection === "Scissors") ||
//     (playerSelection === "Paper" && computerSelection === "Rock") ||
//     (playerSelection === "Scissors" && computerSelection === "Paper")
//   ) {
//     return `You Win! ${playerSelection} beats ${computerSelection}.`;
//   } else if (
//     (playerSelection === "Rock" && computerSelection === "Paper") ||
//     (playerSelection === "Paper" && computerSelection === "Scissors") ||
//     (playerSelection === "Scissors" && computerSelection === "Rock")
//   ) {
//     return `You Lose! ${computerSelection} beats ${playerSelection}.`;
//   } else {
//     return `${playerSelection} is invalid. Please enter either Rock, Paper or Scissors.`;
//   }
// }
