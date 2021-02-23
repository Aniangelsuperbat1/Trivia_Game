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
let timeLeft1 = 10
let superHero = null
let startClick = false

const audioPlay = () => {
    let audio = new Audio("Jeopardy-theme-song.mp3")
    audio.play()
} 

const gem = () => {
    Swal.fire({
    title: 'Welcome',
    text: '"Lasciate ogni speranza, o voi ch\'intrate"',
    imageUrl: './gifs/Avengers_assemble2.gif',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Custom image',
    confirmButtonText: "AVENGERS ASSMEBLED!"
})
}

const rando = () =>{
    let randomIndex = Math.floor(Math.random() * trivia.length)
    superHero = trivia[randomIndex]
    trivia.splice(randomIndex, 1)
    let heroes = superHero.question
    question.innerHTML = heroes
    clearInterval(timer)
}

let timer; 

const count = () => {
    timeLeft1 = 10
    timer = setInterval(() => {
        if(timeLeft1 <= 0){
            clearInterval(timeLeft1 = 0)
        } else if(timeLeft1 === 1 && newLife !== 0){
            Swal.fire({
            icon: 'error',
            title: "TIME'S UP",
            text: 'Better luck next Question',
            imageUrl: "./gifs/outta_time.gif",
            confirmButtonText: "If I must",
            }) .then((result) => {
                if (result.isConfirmed) {
                    rando()
                    count()
                } 
            })
        }
    timeLeft.innerHTML = timeLeft1
    timeLeft1 -=1
}, 1000) 
}

const manOfSteel = () => {
    rando()
    // audioPlay()
    btn1.style.display = "none"
    btn2.classList.remove("hide")
    startClick = true
    count()
}

const darkKnight = () => {
    rando()
    count()
}

const isClicked = () => {
    if(startClick === false){
        Swal.fire({
            icon: 'warning',
            title: 'Push the START button first',
            text: 'Don\'t be a Hero, or be a Hero, I can\'t tell you what to do, I am not your mother.',
            imageUrl: "./gifs/push_button.gif"})
        }
}

const answered = () => {
    if(answer.value !== superHero.answer){
        Swal.fire({
            icon: 'error',
            title: 'Wrong Answer!',
            text: 'Not Tremendous',
            imageUrl: "./gifs/wrong.gif",
            confirmButtonText: "If I must",})
        newLife -= 1
        num.innerHTML = newLife
        answer.value = ""
        rando()
        
    } else{
         Swal.fire({
            icon: 'success',
            title: 'Correct!',
            text: 'You are doing Great!',
            imageUrl: "./gifs/iron_man.gif"})
        newScore += 1
        keepTrack.innerHTML = newScore
        answer.value = ""
        rando()
    }
    // if(answer.value.length > 0){
    //         answer.value = ""
    //     }
}

const newGame = () => {
    Swal.fire({
        icon: 'error',
        title: 'why',
        text: 'fsf',
        imageUrl: "./gifs/Kobe.gif",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No"
    }) .then((result) => {
  if (result.isConfirmed) {
    location.reload()
  } else if (result.isDenied) {
    console.log("ffsdf")
  }
})
}

const winOrLose = () => {
    if(newLife === 0){
        Swal.fire({
        icon: 'error',
        title: 'YOU HAVE LOST THE GAME',
        text: 'You have no health remaining',
        imageUrl: "./gifs/game_over.gif",
    })
}   else if (newScore === 2) {
        Swal.fire({
            title: 'CONGRATULATIONS ON YOUR WIN',
            width: 600,
            padding: '3em',
            background: '#fff url(./gifs/main-dccomics.jpg)',
            backdrop: `
            rgba(0,0,123,0.4)
            url('./gifs/symbols.gif')
            left top
            no-repeat`
        })  
    }
    
}

const laternCorp = () => {
    isClicked()
    answered()
    winOrLose()
    count()
} 

const startGame = () => {
    btn1.addEventListener("click", manOfSteel)
}

const nextQuestion = () => {
    btn2.addEventListener("click", darkKnight)
}

const brightestDay = () => {
    subAnswer.addEventListener("click", laternCorp)
}

gem()
startGame()
nextQuestion()
brightestDay()




