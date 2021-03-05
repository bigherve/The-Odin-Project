/* Rock Paper Scissors 
make a function witch will randomly output Rock Paper Scissors this will be the pc
make another function that will play one round of RPS between the player and the pc
make a function that will play RPS 5 timees and declare a winner */

function computerPlay1() {
    let pcPlay = ['rock', 'paper', 'Scissors'];
    let randomPlay = pcPlay[Math.floor(Math.random() * pcPlay.length)];
    return randomPlay;
}

function computerPlay2() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function computerPlay3() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let playerScore = 0;
let pcScore = 0;


function playRound1() {
    let computerSelection = computerPlay3()
    let playerSelection = prompt('choose rock, paper or scissors', '').toLowerCase();
    let log = ''

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore += 1;
        log = (`You win! ${playerSelection} beats ${computerSelection}
            Player score: ${playerScore} Computer score: ${pcScore}`);
        if (playerScore == 5) {
            log = +'You win!';
        } else if (playerSelection == computerSelection) {
            log = (`It\'s a tie. You both chose ${playerSelection}
            Player score: ${playerScore} Computer score: ${pcScore}`);
        } else {
            pcScore += 1;
            log = (`You lose! ${computerSelection} beats ${playerSelection}
            Player Score: ${playerScore} Computer score: ${pcScore}`);

            if (pcScore == 5) {
                log = +'PC won the game!';
            }
        }
    }
    return log;
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (pcScore == 5) {
            log = +'PC won the game!';
        } else if (playerScore == 5) {
            log = +'You win!';
        }
        playRound();
    }
}



let playerScore = 0;
let pcScore = 0;

function playRound0() {
    let computerSelection = computerPlay1()
    let playerSelection = prompt('choose rock, paper or scissors', '').toLowerCase();
    let log = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore++
        log = ('You win! computers are so dumb')
    } else if (playerSelection == computerSelection) {
        log = ('It\'s a tie. fuck draws lets go again')
    } else {
        pcScore++;
        log = ('You lose! dickhead')
    }
    return log;
}

function playRound2(playerSelection, computerSelection) {
    let log = '';
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            log = 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
            log = 'You Win! Rock beats Scissors';
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            log = 'You Lose! Scissors beats Paper';
        } else if (computerSelection === 'Rock') {
            log = 'You Win! Paper beats Rock';
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            log = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'Paper') {
            log = 'You Win! Scissors beats Paper';
        } else {
            log = "It's a tie";
        }
    }
    return log;
}

function playRoundOg(playerSelection, computerSelection) {

    if (playerSelection == 'Papper' && computerSelection == 'Rock') {
        playerscore = +1
        return `You win! Yay Your score was ${playerscore} and the computer\'s score was ${pcScore} `
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerscore = +1
        return `You win! Yay Your score was ${playerscore} and the computer\'s score was ${pcScore} `
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerscore = +1
        return `You win! Yay Your score was ${playerscore} and the computer\'s score was ${pcScore} `
    } else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        draw = +1
        return `It\'s a draw the number of draws were ${draws}`
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        draw = +1
        return `It\'s a draw the number of draws were ${draws}`
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        draw = +1
        return `It\'s a draw the number of draws were ${draws}`
    } else {
        pcScore = +1
        return `BRRRR You you lose the computer has ${pcScore} and you have ${playerscore}`
    }
}

function game1() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('choose rock, paper or scissors', '').toLowerCase();
        if (playerSelection == "rock") {
            playerScore = 0;
        } else if (playerSelection == "paper") {
            playerScore = 1;
        } else if (playerSelection == "scissors") {
            playerScore = 2;
        }
        pcScore = computerPlay(computerSelection);
        playRound(playerScore, pcScore, computerSelection, playerSelection);
    }

}

function game2() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }

    function game3() {
        if (roundResult.search('You Win!') > -1) {
            playerScore++;
        } else if (roundResult.search('You Lose!') > -1) {
            pcScore++;
        }
        if (playerScore >= 5 && computerScore < 5) {
            'You Win!';
        } else if (playerScore < 5 && computerScore >= 5) {
            'You Lose!';
        }
    }

    function game() {
        for (let i = 0; i < 5; i++) {
            playRound0();
        }
        if (pcScore > playerScore) {
            return `You lose! dickhead Players score: ${playerScore} Pc score: ${pcScore}`;
        } else if (playerScore > pcScore) {
            return `You win! computers are so dumb Players score: ${playerScore} Pc score: ${pcScore}`;
        }
    }