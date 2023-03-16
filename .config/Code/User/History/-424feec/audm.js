const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['D', 'B', 'C', 'A']

let score = 0

const getUsersAnswers = () => {
	let userAnswers = []

	correctAnswers.forEach((_, index) => {
		const userAnswer = form[`inputQuestion${index + 1}`].value
		userAnswers.push(userAnswer)
	})

	return userAnswers
}

const calculateUserScore = userAnswers => {
	userAnswers.forEach((userAnswer, index) => {
		const isUserAnswerCorrect = userAnswer === correctAnswers[index]
		if (isUserAnswerCorrect) {
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
			return clearInterval(timer)
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
