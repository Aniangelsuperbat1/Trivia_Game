const counter = document.querySelector("#counter")
let question = document.querySelector("#question")
const btn1 = document.querySelector("#start")
const btn2 = document.querySelector("#next")
const answer = document.querySelector("#answer")
const subAnswer = document.querySelector("#subAnswer")


const trivia = [
    {
        question: "park",
        answer: "John"
    },
    {
        question: "help",
        answer: "dasd" 
    },
    {
        question: "delay",
        answer: "fg" 
    }
]

// Swal.fire('Any fool can use a computer')

let rando = trivia[Math.floor(Math.random() * trivia.length)]

trivia.forEach((quest) => {
    subAnswer.addEventListener("click", () =>{
        if(answer.value !== quest.answer){
            alert("wrong answer")
        } else {
            alert("right answer")
        }
    })
})

let score = 0

let manOfSteel = () => {
    question.innerHTML = rando.question
    btn1.style.display = "none"
}

let darkKnight = () => {
    console.log("need")
    question.innerHTML = rando.question
}

let startGame = () => {
    btn1.addEventListener("click", manOfSteel)
}

let nextQuestion = () => {
    btn2.addEventListener("click", darkKnight)
}

startGame()
nextQuestion()