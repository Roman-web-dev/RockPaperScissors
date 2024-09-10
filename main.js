console.log("Working")

// A function that returns ramdomly rock paper or scissors
    
    // Declare function
        //     Take random number from 0 to 1
        //     If number less than 1/3 it is rock
        //     If number less than 2/3 it is paper 
        //     If number is higher it is scissors

function getCompuerChoice() {
    let computerChoice = Math.random()

    if (computerChoice < (1 / 3)) {
        return "Rock"
    } else if (computerChoice < (2 / 3)) {
        return "Paper"
      }  else {
        return "Scissors"
      }
    
}

// A function that takes and returns human choice

    //Declare function
        //input 
        //Check IF input is valid
            //While not valid
                //Input again
        //If input is R - Rock
        //If input is P - Paper
        //If input is S - Scissors

function getHumanChoice() {
    let humanChoice = prompt("Your turn. Type 'R' for Rock, 'P' for Paper, 'S' for Scissors: ")
    humanChoice = humanChoice.toUpperCase()
    
    if (humanChoice != "R" && humanChoice != "P" && humanChoice != "S") {
        let valid = 0
        
        while (!valid) {
            humanChoice = prompt("Incorrect value. Type 'R' for Rock, 'P' for Paper, 'S' for Scissors: ")
            
            if (humanChoice) {
                humanChoice = humanChoice.toUpperCase()
           }

            if (humanChoice == "R"|| humanChoice == "P"|| humanChoice == "S") {
                valid = 1
            } else if (humanChoice == null) {
                alert("You canceled input!")
                break;
            }
        }
    }
    
    switch (humanChoice) {
        case "R":
            return "Rock";
        case "P":
            return "Paper";
        case "S":
            return "Scissors";
    }

}

// Declare variables that store human and computer score
let computerScore = 0
let humanScore = 0
// Round by round take human and computer choices and calculate winner

// Logic to play 5 rounds