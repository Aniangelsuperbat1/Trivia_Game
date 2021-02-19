const counter = document.querySelector("#counter")
const score = document.querySelector("#score")
const keepTrack = document.querySelector("#keepTrack")
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

let newScore = 0

let rando = () =>{
    return trivia[Math.floor(Math.random() * trivia.length)]

}

let manOfSteel = () => {
    question.innerHTML = rando().question
    btn1.style.display = "none"
}

let darkKnight = () => {
    console.log("fsdf")
    let nextQuestion = rando().question
    question.innerHTML = nextQuestion
}

let corp = () => {
    answer.value = ""
    console.log("jhg")
    trivia.forEach((triv) =>{
        if(question.innerHTML === triv.question && answer.value !== triv.answer){
        alert("wrong answer") 
        let currScore = newScore--
        keepTrack.innerHTML = currScore
        console.log(currScore)}
        
        else if (question.innerHTML === triv.question && answer.value === triv.answer){ 
            alert("right answer")
            let currScore1 = newScore++
            keepTrack.innerHTML = currScore1
            return currScore
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


startGame()
nextQuestion()
brightestDay()