let rPs = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    computerSelection = rPs[Math.floor(Math.random() * rPs.length)];
    return computerSelection;
}

function playRound() {
    playerPrompt = prompt("Enter rock, paper, or scissors.");
    playerSelection = (playerPrompt[0]).toUpperCase() + (playerPrompt.slice(1)).toLowerCase();
    i = computerPlay();
    let tally = [];
    if (playerSelection === i) {
        return "It's a tie."
        tally.push("Tie");
    } else if (playerSelection === "Rock" && i === "Scissors") {
        return "You win. Rock beats scissors."
        tally.push("Win");
    } else if (playerSelection === "Rock" && i === "Paper") {
        return "You lose. Paper beats rock."
        tally.push("Lose");
    } else if (playerSelection === "Paper" && i === "Scissors") {
        return "You lose. Scissors beats paper."
        tally.push("Lose");
    } else if (playerSelection === "Paper" && i === "Rock") {
        return "You win. Paper beats rock."
        tally.push("Win");
    } else if (playerSelection === "Scissors" && i === "Paper") {
        return "You win. Scissors beats paper."
        tally.push("Win");
    } else if (playerSelection === "Scissors" && i === "Rock") {
        return "You lose. Rock beats scissors."
        tally.push("Lose");
    }
    console.log(tally);
}


function game() {
    for (let a = 0; 0 < 5; a++) {
        playRound();
    }

}