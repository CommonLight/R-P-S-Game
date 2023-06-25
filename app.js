
const displayComputerChoice = document.getElementById('computer-choice')
const displayPlayerChoice = document.getElementById('player-choice')
const displayResult = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    displayPlayerChoice.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = 'ROCK'}
    if (randomNumber === 2) {
        computerChoice = 'PAPER'}
    if (randomNumber === 3) {
        computerChoice = 'SCISSORS'}
    displayComputerChoice.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = `It's a draw!`
    } else if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS') {
        result = `You lost.`
    } else if (computerChoice === 'PAPER' && playerChoice === 'ROCK') {
        result = `You lost.`
    } else if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') {
        result = `You lost.`
    } else {
        result = 'You win!!!'}
    displayResult.innerHTML = result
}