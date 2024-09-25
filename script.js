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

const play = () => {
	console.log('PLAY!')
}

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', play)
document.querySelector('#paper').addEventListener('click', play)
document.querySelector('#scissors').addEventListener('click', play)
