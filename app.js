let playerScore = 0;
let computerScore = 0;
let saying = "Play Rock Paper or Scissors!"

//assign what the computer plays and call it computerPlay
//let moodIndex = Math.floor(Math.random() * cat.moods.length)
//let computerPlay = Math.floor(Math.random() * 3)
//console.log(computerPlay)
//key
//rock=0
//paper=1
//scissors=2
function sendScreen() {
  document.getElementById("banner1").textContent = saying;
  document.getElementById("banner2").textContent = (`You:${playerScore} vs. All of Humanity:${computerScore}`)
}

/*
function drawCat() {
  document.body.style.backgroundColor = "orange"
  document.getElementById("cat-name").textContent = cat.name;
  document.querySelector("#cat-pet-count").textContent = cat.petCount.toString();
  drawStatus()
*/


function tie() {
  saying = "It was a tie!"
  sendScreen()
}

function lose() {
  saying = "You LOST!"
  computerScore++
  sendScreen()
}

function win() {
  saying = "Winner Winner Winner!"
  playerScore++
  sendScreen()

}

//accept player input
function playRock() {
  let computerPlay = Math.floor(Math.random() * 3)
  if (computerPlay == 0) {
    tie()
  }
  else if (computerPlay == 1) {
    lose()
  }
  else if (computerPlay == 2) {
    win()
  }
}

function playPaper() {
  let computerPlay = Math.floor(Math.random() * 3)
  if (computerPlay == 1) {
    tie()
  }
  else if (computerPlay == 2) {
    lose()
  }
  else if (computerPlay == 0) {
    win()
  }
}

function playScissors() {
  let computerPlay = Math.floor(Math.random() * 3)
  if (computerPlay == 2) {
    tie()
  }
  else if (computerPlay == 0) {
    lose()
  }
  else if (computerPlay == 1) {
    win()
  }
}
//determine winner, ties

//place things on screen