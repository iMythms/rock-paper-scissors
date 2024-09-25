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
	let msgColor
	switch (msg) {
		case 'Congrats! You win!':
			msgColor = 'green'
			break
		case 'You tied!':
			msgColor = 'orange'
			break
		default:
			msgColor = 'red'
			break
	}

	resultDisplayElement.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}.<br><br><span style="color:${msgColor}; font-weight: bold; font-size: x-large;">${msg}</span>`
}

/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll('button').forEach((button) => {
	button.addEventListener('click', play)
})
