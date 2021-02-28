const counter = document.querySelector('#counter');
let timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
const keepTrack = document.querySelector('#keepTrack');
let question = document.querySelector('#question');
const btn1 = document.querySelector('#start');
const btn2 = document.querySelector('#next');
const answer = document.querySelector('.answer');
const subAnswer = document.querySelector('#subAnswer');
const num = document.querySelector('.num');

let newScore = 0;
let newLife = 3;
let timeLeft1 = 30;
let superHero = null;
let startClick = false;
let timer;

const audioPlay = () => {
	let audio = new Audio('Jeopardy-theme-song.mp3');
	audio.play();
};

const gem = () => {
	Swal.fire({
		title:
			'<b style="color:white; font-size: 50px;">Welcome <br> <b style = "font-size: 30px";>Lasciate Ogni Speranza, Voi Ch\'entrate.</b>',
		background: 'rgb(255,0,0,.1)',
		imageUrl: './gifs/Avengers_assemble2.gif',
		confirmButtonText: 'AVENGERS!!! ASSEMBLE!',
	});
};

const rando = () => {
	let randomIndex = Math.floor(Math.random() * trivia.length);
	superHero = trivia[randomIndex];
	trivia.splice(randomIndex, 1);
	let heroes = superHero.question;
	question.innerHTML = heroes;
	clearInterval(timer);
};

const count = () => {
	timeLeft1 = 30;
	timer = setInterval(() => {
		if (timeLeft1 <= 0) {
			clearInterval((timeLeft1 = 0));
		} else if (timeLeft1 === 1 && newLife !== 0 && newScore !== 1) {
			Swal.fire({
				icon: 'error',
				title:
					'<b style="color:white; font-size: 50px;">TIME IS UP <br> <b style = "font-size: 40px";>Better Luck Next Question. </b>',
				background: 'rgb(255,0,0,.1)',
				imageUrl: './gifs/outta_time.gif',
				confirmButtonText: 'Next Question',
			}).then((result) => {
				if (result.isConfirmed) {
					rando();
					count();
				}
			});
		}
		timeLeft.innerHTML = timeLeft1;
		timeLeft1 -= 1;
	}, 1000);
};

const manOfSteel = () => {
	rando();
	// audioPlay()
	btn1.style.display = 'none';
	btn2.classList.remove('hide');
	startClick = true;
	count();
};

const darkKnight = () => {
	rando();
	count();
};

const isClicked = () => {
	if (startClick === false) {
		Swal.fire({
			icon: 'warning',
			title:
				'<b style="color:white; font-size: 50px;">Push START button first <br> <b style = "font-size: 40px";>Don\'t be a Hero. Or be a Hero. I can\'t tell you what to do, I am not your Mother</b>',
			confirmButtonText: 'Be The Hero You Were Born To Be',
			background: 'rgb(255,0,0,.1)',
			imageUrl: './gifs/push_button.gif',
		});
	}
};

const answered = () => {
	if (answer.value !== superHero.answer) {
		timeLeft1 = 30;
		timeLeft.innerHTML = timeLeft1;
		Swal.fire({
			icon: 'error',
			title:
				'<b style="color:white; font-size: 50px;">WRONG ANSWER <br> <b style = "font-size: 40px";>Not Tremendous. </b>',
			background: 'rgb(255,0,0,.1)',
			imageUrl: './gifs/wrong.gif',
			confirmButtonText: 'OK',
		}).then((result) => {
			if (result.isConfirmed) {
				count();
			}
		});
		newLife -= 1;
		num.innerHTML = newLife;
		answer.value = '';
	} else {
		timeLeft1 = 30;
		timeLeft.innerHTML = timeLeft1;
		Swal.fire({
			icon: 'success',
			title:
				'<b style="color:white; font-size: 50px;">CORRECT <br> <b style = "font-size: 40px";>You are Doing Great!. </b>',
			background: 'rgb(255,0,0,.1)',
			imageUrl: './gifs/iron_man.gif',
			confirmButtonText: 'OK',
		}).then((result) => {
			if (result.isConfirmed) {
				count();
			}
		});
		newScore += 1;
		keepTrack.innerHTML = newScore;
		answer.value = '';
	}
};

const winOrLose = () => {
	if (newLife === 0) {
		Swal.fire({
			icon: 'error',
			title:
				'<b style="color:white; font-size: 50px;">WRONG ANSWER <br> <b style = "font-size: 40px";>Not Tremendous. </b>',
			background: 'rgb(255,0,0,.1)',
			imageUrl: './gifs/wrong.gif',
			confirmButtonText: 'OK',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title:
						'<b style="color:white; font-size: 50px;">GAME OVER <br> <b style = "font-size: 30px";>You Have Lost The Game. </b>',
					background: 'rgb(255,0,0,.1)',
					imageUrl: './gifs/game_over.gif',
					confirmButtonText:
						'You did not become the hero your dog/cat thinks you are',
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							icon: 'error',
							title: '<b style="color:white">Would You Like To Play Again?</b>',
							background: 'rgb(255,0,0,.1)',
							imageUrl: './gifs/deadpool_playagain.gif',
							showDenyButton: true,
							confirmButtonText: 'Play Again',
							denyButtonText: 'Do not Play Again',
						}).then((result) => {
							if (result.isConfirmed) {
								location.reload();
							} else if (result.isDenied) {
								location.reload();
							}
						});
					}
				});
			}
		});
	} else if (newScore === 2) {
		Swal.fire({
			icon: 'success',
			title:
				'<b style="color:white; font-size: 50px;">CORRECT <br> <b style = "font-size: 40px";>You are Doing Great!. </b>',
			background: 'rgb(255,0,0,.1)',
			imageUrl: './gifs/iron_man.gif',
			confirmButtonText: 'OK',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					icon: 'success',
					title:
						'<b style="color:white; font-size: 40px;">CONGRATULATIONS!!! <br> <b style = "font-size: 40px";>You Have Become The Hero The World Needs But Not The Hero It Deserves </b>',
					background: 'rgb(255,0,0,.1)',
					imageUrl: './gifs/JL_universe.jpg',
					confirmButtonText: 'YAY! I Am a Big Kid Now',
					backdrop: `
                rgba(0,0,123,0.4)
                url('./gifs/roof_bat.gif')
                left top
                no-repeat`,
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							icon: 'success',
							title: '<b style="color:white">Would You Like To Play Again?</b>',
							background: 'rgb(255,0,0,.1)',
							imageUrl: './gifs/Homer_win.gif',
							showDenyButton: true,
							confirmButtonText: 'Play Again',
							denyButtonText: 'Do not Play Again',
						}).then((result) => {
							if (result.isConfirmed) {
								location.reload();
							} else if (result.isDenied) {
								location.reload();
							}
						});
					}
				});
			}
		});
	}
};

const laternCorp = () => {
	isClicked();
	answered();
	winOrLose();
	rando();
};

const startGame = () => {
	btn1.addEventListener('click', manOfSteel);
};

const nextQuestion = () => {
	btn2.addEventListener('click', darkKnight);
};

const brightestDay = () => {
	subAnswer.addEventListener('click', laternCorp);
};

gem();
startGame();
nextQuestion();
brightestDay();
