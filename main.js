console.log("Working")

const resultContainer = document.querySelector("#resultContainer")
const btns = document.querySelectorAll("button");

const tryAgain = document.createElement("h1")
tryAgain.textContent = "Try Again"


btns.forEach((button) => {
    button.addEventListener("click", (e) => {
       playRound(getComputerChoice(), e.target.id)
    });
})

function getComputerChoice() {
    let computerChoice = Math.random()

    if (computerChoice < (1 / 3)) {
        return "Rock"
    } else if (computerChoice < (2 / 3)) {
        return "Paper"
      }  else {
        return "Scissors"
      }
    
}


let computerScore = 0
let humanScore = 0



function playRound(computerValue, humanValue) {
    
    if (document.body.contains(tryAgain)) {
        document.body.removeChild(tryAgain);
    }

    if (computerValue === humanValue) {
        document.body.appendChild(tryAgain)
        return
        }
    
    
    if (
        ((humanValue == "Rock") && (computerValue == "Scissors")) ||
        ((humanValue == "Paper") && (computerValue == "Rock")) ||
        ((humanValue == "Scissors") && (computerValue == "Paper"))
    ) {
            console.log(`Your Choice: ${humanValue}`)
            console.log(`Computer Choice: ${computerValue}`)
            console.log("You Win!")
            humanScore += 1
    } else {
        console.log(`Your Choice: ${humanValue}`)
        console.log(`Your Choice: ${computerValue}`)
        console.log("You Lose!")
        computerScore += 1
    }
    
    if (humanScore < 5 && computerScore < 5) {
        resultContainer.innerHTML = `Human: ${humanScore} ${humanValue}<br> 
                                Computer: ${computerScore} ${computerValue}`
    } else {
        let winner
        if (humanScore > computerScore) {
            winner = "Human"
        } else {
            winner = "Compuer"
        }
        resultContainer.innerHTML = `Winner is ${winner}`
        computerScore = 0
        humanScore = 0
    }
    
    
}


