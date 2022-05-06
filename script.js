let rPs = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    computerSelection = rPs[Math.floor(Math.random() * rPs.length)];
    return computerSelection;
}

function playRound() {
    playerPrompt = prompt("Enter rock, paper, or scissors.");
    playerSelection = (playerPrompt[0]).toUpperCase() + (playerPrompt.slice(1)).toLowerCase();
    i = computerPlay();
    if (playerSelection === i) {
        return "It's a tie."
    } else if (playerSelection === "Rock" && i === "Scissors") {
        return "You win. Rock beats scissors."
    } else if (playerSelection === "Rock" && i === "Paper") {
        return "You lose. Paper beats rock."
    } else if (playerSelection === "Paper" && i === "Scissors") {
        return "You lose. Scissors beats paper."
    } else if (playerSelection === "Paper" && i === "Rock") {
        return "You win. Paper beats rock."
    } else if (playerSelection === "Scissors" && i === "Paper") {
        return "You win. Scissors beats paper."
    } else if (playerSelection === "Scissors" && i === "Rock") {
        return "You lose. Rock beats scissors."
    }
    console.log(tally);
}

function game() {
    loss = [];
    win = [];
    tie = [];
    for (let a = 0; a < 5; a++) {
        c = playRound();
        console.log(c);
        if (c === "It's a tie.") {
            tie.push(c);
        } else if (c === "You win. Rock beats scissors." || c === "You win. Paper beats rock." || c === "You win. Scissors beats paper.") {
            win.push(c);
        } else if (c === "You lose. Paper beats rock." || c === "You lose. Scissors beats paper." || c === "You lose. Rock beats scissors.") {
            loss.push(c);
        }
    }
   
    if (win.length > loss.length) {
        result = "you won."
    } else if (win.length = loss.length) {
        result = "you tied."
    } else {
        result = "you lost."
    }


    console.log(`In five rounds, ${result} The tally is: \n Wins: ${win.length} \n Losses: ${loss.length} \n Ties: ${tie.length}`)

}