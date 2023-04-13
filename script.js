function getComputerChoice () {
    let answers = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(0 + Math.random() * (2 + 1 - 0))
    return answers[choice]
}

function playRound (playerSelection) {
    let computerSelection = getComputerChoice()
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Draw!"
    }
    else {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                if (computerSelection.toLowerCase() === "paper") {
                    computerScore++
                    score.textContent = `${playerScore} - ${computerScore}`
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    playerScore++
                    score.textContent = `${playerScore} - ${computerScore}`
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
            case "paper":
                if (computerSelection.toLowerCase() === "scissors") {
                    computerScore++
                    score.textContent = `${playerScore} - ${computerScore}`
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    playerScore++
                    score.textContent = `${playerScore} - ${computerScore}`
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
            case "scissors":
                if (computerSelection.toLowerCase() === "rock") {
                    computerScore++
                    score.textContent = `${playerScore} - ${computerScore}`
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    playerScore++
                    score.textContent = `${playerScore} - ${computerScore}`
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
            default:
                    return ("Give me Rock, Paper os Scissors!")
        }
    }
}

const results = document.getElementById("results")
const winner = document.getElementById("winner")

const score = document.getElementById("score")
let playerScore = 0
let computerScore = 0
score.textContent = `${playerScore} - ${computerScore}`

const rock = document.getElementById("rock")
rock.addEventListener('click', function(e) {
    console.log(results.textContent = playRound("Rock"))
    if (playerScore == 5) {
        winner.textContent = "Player WINS the whole match! MACHINES SUCK! HAHAHA"
    }
    if (computerScore == 5) {
        winner.textContent = "Computer WINS the whole match! MACHINES ARE TAKING OVER! HAHAHA"
    }
})

const paper = document.getElementById("paper")
paper.addEventListener('click', function(e) {
    console.log(results.textContent = playRound("Paper"))
    if (playerScore == 5) {
        winner.textContent = "Player WINS the whole match! MACHINES SUCK! HAHAHA"
    }
    if (computerScore == 5) {
        winner.textContent = "Computer WINS the whole match! MACHINES ARE TAKING OVER! HAHAHA"
    }
})

const scissors = document.getElementById("scissors")
scissors.addEventListener('click', function(e) {
    console.log(results.textContent = playRound("Scissors"))
    if (playerScore == 5) {
        winner.textContent = "Player WINS the whole match! MACHINES SUCK! HAHAHA"
    }
    if (computerScore == 5) {
        winner.textContent = "Computer WINS the whole match! MACHINES ARE TAKING OVER! HAHAHA"
    }
})



/*do {
    // playerSelection = prompt("Rock, paper or scissors?")
    // playRound(playerSelection, computerSelection)
    if (results.textContent[4] === "W") {
        playerScore++
    }
    else if (results.textContent[4] === "L") {
        computerScore++
    }
    console.log(`Player - ${player}, computer - ${computer}`)
    score.textContent = `${playerScore} - ${computerScore}`
    console.log(results.textContent[4])
} while ((rock.click()) && (playerScore < 5 || computerScore < 5));*/

//player > computer ? alert("Player is the WINNER!") :
  //  computer > player ? alert("Computer is the WINNER!") : alert("It's DRAW!")

    