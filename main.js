// import {trivia} from "./triviaQ"

const counter = document.querySelector("#counter")
let timeLeft = document.querySelector("#timeLeft")
const score = document.querySelector("#score")
const keepTrack = document.querySelector("#keepTrack")
let question = document.querySelector("#question")
const btn1 = document.querySelector("#start")
const btn2 = document.querySelector("#next")
const answer = document.querySelector("#answer")
const subAnswer = document.querySelector("#subAnswer")

let newScore = 0
let timeLeft1 = 10

let gem = () => {}

let rando = () =>{
    return trivia[Math.floor(Math.random() * trivia.length)]
}

let count = () => {
    setInterval(() => {
        if(timeLeft1 <= 0){
            clearInterval(timeLeft1 = 0)
        }
        timeLeft.innerHTML = timeLeft1
        timeLeft1 -=1
    }, 1000)
}

let manOfSteel = () => {
    question.innerHTML = rando().question
    btn1.style.display = "none"
    btn2.classList.remove("hide")
    count()
}

let darkKnight = () => {
    let nextQuestion = rando().question
    question.innerHTML = nextQuestion
    count()
}

let corp = () => {
    trivia.forEach((triv, index) =>{
        if(question.innerHTML === triv.question && answer.value !== triv.answer){
        Swal.fire({
            icon: 'error',
            title: 'Wrong Answer!',
            text: 'Something went wrong!'})
        newScore -= 1
        keepTrack.innerHTML = newScore
        answer.value = ""
        console.log(newScore)}
        else if (question.innerHTML === triv.question && answer.value === triv.answer){ 
            Swal.fire({
            icon: 'success',
            title: 'Correct!',
            text: 'You are doing Great!',})
            newScore += 1
            keepTrack.innerHTML = newScore
            answer.value = ""
            count()
            return newScore
        }
    })
}


let startGame = () => {
    btn1.addEventListener("click", manOfSteel)
}

let nextQuestion = () => {
    btn2.addEventListener("click", darkKnight)
}

let brightestDay = () => {
    subAnswer.addEventListener("click", corp)
}


// gem()
startGame()
nextQuestion()
brightestDay()
