let choiceBtn = document.querySelectorAll('.choice');
let result = document.querySelector('#result');
let play = document.querySelector('#play');
let youChoosed = document.querySelector('#youChoosed');
let computerChoosed = document.querySelector('#computerChoosed');

Array.from(choiceBtn).forEach(element => {
    element.onclick = () => {
        let checkboxes = document.querySelectorAll('.choice')
        checkboxes.forEach((item) => {
            if (item !== element) item.checked = false
        })
    }
});

play.addEventListener('click', () => {
    let userChoice = document.querySelector('.choice:checked');
    let choices = ['rock', 'paper', 'scissor'];
    let i = Math.floor(Math.random() * choices.length)
    playComputer = choices[i];
    playGame(userChoice.name, playComputer)
    userChoice.checked = false
});

function playGame(a, b) {
    youChoosed.innerText = a;
    computerChoosed.innerText = b;
    if (a == b) result.innerText = "Game Draw !"
    else if (userWinning(a, b)) result.innerText = "You Won !"
    else result.innerText = "You lose !"

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