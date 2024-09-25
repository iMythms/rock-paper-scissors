/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors']

/*-------------------------------- Variables --------------------------------*/

let playerChoice
let computerChoice
let msg

/*------------------------ Cached Element References ------------------------*/

const resultDisplayElement = document.querySelector('#result-display')
console.dir(resultDisplayElement)

/*-------------------------------- Functions --------------------------------*/

const getPlayerChoice = (event) => {
	playerChoice = event.target.id
}
const play = (event) => {
	getPlayerChoice(event)
	getComputerChoice()
	compare()
	render()
}
const getComputerChoice = () => {
	const randomIndex = Math.floor(Math.random() * choices.length)
	computerChoice = choices[randomIndex]
}
const compare = () => {
	if (playerChoice === computerChoice) {
		msg = 'You tied!'
	} else if (playerChoice === choices[0] && computerChoice === choices[2]) {
		msg = 'Congrats! You win!'
	} else if (playerChoice === choices[1] && computerChoice === choices[2]) {
		msg = 'Congrats! You win!'
	} else if (playerChoice === choices[2] && computerChoice === choices[1]) {
		msg = 'Congrats! You win!'
	} else {
		msg = 'You lose! Try again!'
	}
}

const render = () => {
	resultDisplayElement.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}

/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll('button').forEach((button) => {
	button.addEventListener('click', play)
})
