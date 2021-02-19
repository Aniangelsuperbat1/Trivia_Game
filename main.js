const counter = document.querySelector("#counter")
let question = document.querySelector("#question")
const btn1 = document.querySelector("#start")
const btn2 = document.querySelector("#next")
const answer = document.querySelector("#answer")
const subAnswer = document.querySelector("#subAnswer")


const trivia = [
    {
        question: "park",
        answer: ""
    },
    {
        question: "help",
        answer: "" 
    },
    {
        question: "delay",
        answer: "" 
    }
]

// Swal.fire('Any fool can use a computer')

let rando = trivia[Math.floor(Math.random() * trivia.length)]

let manOfSteel = () => {
    console.log("go")
    question.innerHTML = rando.question
    btn1.style.display = "none"
    
}

let darkKnight = () => {

}

let startGame = () => {
    btn1.addEventListener("click", manOfSteel)
}

let nextQuestion = () => {
    btn2.addEventListener("click", darkKnight)
}

startGame()