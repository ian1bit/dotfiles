const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['D', 'B', 'C', 'A']

let score = 0

const getUsersAnswers = () => {
	const userAnswers = [
		form.inputQuestion1.value,
		form.inputQuestion2.value,
		form.inputQuestion3.value,
		form.inputQuestion4.value,
	]

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
	finalResult.classList.remove('d-none')
}

const animateFinalScore = () => {
	const timer = setInterval(() => {
		if (counter === score) {
			clearInterval(timer)
		}

		finalResult.querySelector('span').textContent = `${counter}%`
		counter++
	}, 10)
}

form.addEventListener('submit', event => {
	event.preventDefault()
	
	const userAnswers = getUsersAnswers()

	calculateUserScore(userAnswers)

	showFinalScore()

	let counter = 0

	animateFinalScore()
})
