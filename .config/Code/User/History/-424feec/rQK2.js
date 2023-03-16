const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['D', 'B', 'C', 'A']

let score = 0

const getUsersAnswers = () => {
	let userAnswers = []

	for (let i = 0; i < correctAnswers.length; i++) {
		console.log(form[`inputQuestion${i + 1}`].value)
	}

	// const userAnswers = [
	// 	form.inputQuestion1.value,
	// 	form.inputQuestion2.value,
	// 	form.inputQuestion3.value,
	// 	form.inputQuestion4.value,
	// ]

	return userAnswers
}

const calculateUserScore = userAnswers => {
	userAnswers.forEach((userAnswer, index) => {
		if (userAnswer === correctAnswers[index]) {
			score += 25
		}
	})
}

const showFinalScore = () => {
	scrollTo(0, 0)
	finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
	let counter = 0

	const timer = setInterval(() => {
		if (counter === score) {
			clearInterval(timer)
		}

		finalScoreContainer.querySelector('span').textContent = `${counter}%`
		counter++
	}, 10)
}

form.addEventListener('submit', event => {
	event.preventDefault()
	
	const userAnswers = getUsersAnswers()

	calculateUserScore(userAnswers)
	showFinalScore()
	animateFinalScore()
})
