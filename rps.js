
    function computerPlay() { //computer generates a random answer.
        let random = ["rock", "paper", "scissors"];
        return random[Math.floor(Math.random() * 3)];
        }
        
        function autoPlay(){ // Automates User for testing purposes
            let random = ["rock", "paper", "scissors"];
            return random [Math.floor(Math.random() * 3)];
        }
    function playRound(userSelection, computerSelection) { //plays a round of the game.
        if (userSelection === computerSelection) {
        return draw
        }
            else if
                (userSelection === "rock" && computerSelection === "paper" ||
                userSelection === "paper" && computerSelection === "scissors" ||
                userSelection === "scissors" && computerSelection === "rock") { 
                    compPts++
                    return lose
                }
                    else {
                        userPts++
                        return win
                    }
        }
        
        
        let userPts = parseInt(0);
        let compPts = parseInt(0);
        let win = "You win!"
        let lose = "You lost!"
        let draw = "It is a tie!"
        
            for(var i=0;i<5;i++){
                let userSelection = prompt("Choose your weapon!");
                const computerSelection = computerPlay()
                console.log(playRound(userSelection, computerSelection));
                console.log("Your score = " + userPts);
                console.log("Computer's score = " + compPts);
            }
            /*
                if (i === 5) {
                if (userPts < compPts){
                    console.log("You Lose! " + userPts + " to " + compPts + ". Starting Over in 3 Seconds");     
                    setTimeout(() => {  location.reload(); }, 3000);
                }
                else if (compPts < userPts){    
                    console.log("You Win! " + userPts + " to " + compPts + ". Starting Over in 3 Seconds");     
                    setTimeout(() => {  location.reload(); }, 3000);
                }
                else {
                    console.log("Tie Game! Starting Over in 3 Seconds");     
                    setTimeout(() => {  location.reload(); }, 3000);
                }

       
    }
    */