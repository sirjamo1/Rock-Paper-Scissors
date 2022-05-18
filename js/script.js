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

// plays one game, and returns if you draw/win/lose and why in a string
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")
  ) {
    return `Draw! ${playerSelection} is equal to ${computerSelection}.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    return `${playerSelection} is invalid. Please enter either Rock, Paper or Scissors.`;
  }
}

// prompts player to input rock/paper/scissors then converts it to lowercase before changing the first character to upper case to match computer
function playerPrompt() {
  let playerInput = prompt("Please Choose Rock, Paper or Scissors");
  playerInput = playerInput.toLowerCase();
  let playerInputCased = " ";
  if ((playerInput === "rock", "paper", "scissors")) {
    playerInputCased =
      playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
  }
  return playerInputCased;
}

function game() {
  let playerScore = 0; //player score start at 0
  let computerScore = 0; //computer score starts at 0
  for (let i = 0; i < 5; i++) {
    // play for 5 games
    const playerSelection = playerPrompt();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection)); //  1 playRound function and console.log string
    if (playRound(playerSelection, computerSelection).includes(`Win!`)) {
      // if the string `Win!` is found in the return string plus 1 to player score
      playerScore += 1;
    } else if (
      playRound(playerSelection, computerSelection).includes(`Lose!`)
    ) {
      // if the string `Lose!` is found in the return string plus 1 to computer
      computerScore += 1;
    } else if (
      playRound(playerSelection, computerSelection).includes(`Draw!`)
    ) {
      // if the string `Draw!` is found in the return string plus 0 and i-- (to play another round)
      i--;
    } else if (
      playRound(playerSelection, computerSelection).includes(`invalid`)
    ) {
      // if the string `invalid` is found in the return string plus 0 and i-- (to play another round)
      i--;
    }
    console.log(`Player: ${playerScore}  Computer: ${computerScore}`);
    // shows player/computer score after each round
  }
  if (playerScore > computerScore) {
    // alerts player they have won with final score and string
    return alert(
      `You Won!  Player: ${playerScore}  Computer: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    // alerts player they have lost with final score and string
    return alert(
      `You Lose!  Player: ${playerScore}  Computer: ${computerScore}`
    );
  }
}

// need to add html and css for user playability
