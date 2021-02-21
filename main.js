// import {trivia} from "./triviaQ"

const counter = document.querySelector("#counter")
let timeLeft = document.querySelector("#timeLeft")
const score = document.querySelector("#score")
const keepTrack = document.querySelector("#keepTrack")
let question = document.querySelector("#question")
const btn1 = document.querySelector("#start")
const btn2 = document.querySelector("#next")
const answer = document.querySelector(".answer")
const subAnswer = document.querySelector("#subAnswer")
const num = document.querySelector(".num")


let newScore = 0
let newLife = 3
let timeLeft1 = 30
let reload = false
let audioPlay = () => {
    let audio = new Audio("Jeopardy-theme-song.mp3")
    audio.play()
} 

let gem = () => {
    Swal.fire({
    title: 'Welcome',
    text: '"Lasciate ogni speranza, o voi ch\'intrate"',
    imageUrl: 'party.gif',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Custom image',
})
}

let rando = () =>{
    let superHero = trivia[Math.floor(Math.random() * trivia.length)]
    let heroes = superHero.question
    question.innerHTML = heroes
}

let count = () => {
    setInterval(() => {
        if(timeLeft1 <= 0){
            clearInterval(timeLeft1 = 0)
            // Swal.fire({
            // icon: 'error',
            // title: 'TIME/S UP',
            // text: 'Better luck next Question',
            // imageUrl: "Smash_bro.gif"})
        }
        timeLeft.innerHTML = timeLeft1
        timeLeft1 -=1
    }, 1000)
}

let manOfSteel = () => {
    rando()
    // audioPlay()
    btn1.style.display = "none"
    btn2.classList.remove("hide")
    count()
}

let darkKnight = () => {
    rando()
    count()
}

// let clickStart = () =>{
//     if(answer.value.length > 0){
//         alert("Click Start first")
//         answer.value = ""
//     } else if(startGame){
//         return
//     }}

let laternCorp = () => {
    // clickStart()
    let removeQuestion = trivia
    trivia.forEach((triv, index) =>{
        if(question.innerHTML === triv.question && answer.value !== triv.answer){
        Swal.fire({
            icon: 'error',
            title: 'Wrong Answer!',
            text: 'Not Tremendous',
            imageUrl: "wrong.gif"})
        newLife -= 1
        num.innerHTML = newLife
        answer.value = ""
        rando()
        removeQuestion.splice(index, 1)
        console.log(trivia)
            if(newLife === 0){
                Swal.fire({
                icon: 'error',
                title: 'YOU HAVE LOST THE GAME',
                text: 'You have no health remaining',
                imageUrl: "game_over.gif",
            })
        }}
        else if (question.innerHTML === triv.question && answer.value === triv.answer){ 
            Swal.fire({
            icon: 'success',
            title: 'Correct!',
            text: 'You are doing Great!',
            imageUrl: "Kobe.gif"})
            newScore += 1
            keepTrack.innerHTML = newScore
            answer.value = ""
            rando()
            removeQuestion.splice(index, 1)
            console.log(trivia)
                if(newScore === 2){
                    Swal.fire({
                        title: 'CONGRATULATIONS ON YOU WIN',
                        width: 600,
                        padding: '3em',
                        background: '#fff url(main-dccomics.jpg)',
                        backdrop: `
                        rgba(0,0,123,0.4)
                        url('symbols.gif')
                        left top
                        no-repeat`
                    })
                    newScore
                }
        }
    })
    // count()
}


let startGame = () => {
    btn1.addEventListener("click", manOfSteel)
}

let nextQuestion = () => {
    btn2.addEventListener("click", darkKnight)
}

let brightestDay = () => {
    subAnswer.addEventListener("click", laternCorp)
}


gem()
startGame()
nextQuestion()
brightestDay()



