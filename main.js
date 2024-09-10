console.log("Working")

// A function that returns ramdomly rock paper or scissors
    
    // declare function
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
console.log(getCompuerChoice())
// A function that takes and returns human choice

// Declare variables that store human and computer score

// Round by round take human and computer choices and calculate winner

// Logic to play 5 rounds