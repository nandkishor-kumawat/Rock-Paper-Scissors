let choiceBtn = document.querySelectorAll('.choiceBtn');
let result = document.querySelector('#result');
let youChoosed = document.querySelector('#youChoosed');
let computerChoosed = document.querySelector('#computerChoosed');

Array.from(choiceBtn).forEach(element => {
    element.onclick = () => {
        let userChoice = element.textContent;
        let choices = ['rock', 'paper', 'scissor'];
        playComputer = choices[Math.floor(Math.random() * choices.length)];
        playGame(userChoice, playComputer)
    }
});

function playGame(a, b) {
    youChoosed.innerText = a;
    computerChoosed.innerText = b;
    if (a == b) {
        result.style.color = 'blue';
        result.innerText = "Game Draw !"
    }
    else if (userWinning(a, b)) {
        result.style.color = 'green';
        result.innerText = "You Won !"
    }
    else {
        result.innerText = "You lose !"
        result.style.color = 'red'
    }
}

let winningCase = {
    'rock': 'scissor',
    'paper': 'rock',
    'scissor': 'paper'
}

function userWinning(a, b) {
    for (const [key, value] of Object.entries(winningCase)) {
        return ((a === key) && (b === value))
    }
}