const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['D', 'B', 'C', 'A']

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

form.addEventListener('submit', event => {
	event.preventDefault()
	
	let score = 0

	const userAnswers = getUsersAnswers()

	calculateUserScore(userAnswers)

	scrollTo(0, 0)

	finalResult.classList.remove('d-none')

	let counter = 0

	const timer = setInterval(() => {
		if (counter === score) {
			clearInterval(timer)
		}

		finalResult.querySelector('span').textContent = `${counter}%`
		counter++
	}, 10)
})
