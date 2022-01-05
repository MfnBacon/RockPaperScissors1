// Need these for later code
var userPts = 0;
var compPts = 0;
var round = 0;

document.getElementById("userPts").textContent = userPts;
document.getElementById("compPts").textContent = compPts;
document.getElementById("messageBox").textContent = 'First to Five Points. Lets do it.';

// Capitalizes first letter of return output.
function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}


// Random Computer Selection
function computerPlay() {
    var compOptions = ['rock','paper','scissors'];
    return compOptions[Math.floor(Math.random()*compOptions.length)];
    
}


function playRound(userSelection, computerSelection) { 
    var userWin = "You've Won! Computer Chose " + capitalize(computerSelection) + '.';
    var userLose = "You've Lost! Computer Chose " + capitalize(computerSelection) + '.';
    var draw = "It's a Draw!";
    round++;
    if (userSelection === computerSelection) {
    return draw
    }
        else if
            (userSelection === "rock" && computerSelection === "paper" ||
            userSelection === "paper" && computerSelection === "scissors" ||
            userSelection === "scissors" && computerSelection === "rock") { 
                compPts++
                return userLose
            }
                else {
                    userPts++
                    return userWin
                }
    }
    
    function game(player) {
        if(userPts < 5 && compPts < 5) {
        var playerSelection = player
        const computerSelection = computerPlay();
        var roundText = playRound(playerSelection, computerSelection)
        document.getElementById("messageBox").textContent = roundText;
        document.getElementById("userPts").textContent = userPts;
        document.getElementById("compPts").textContent = compPts;
        
    }
        
        if (userPts == 5) {
            document.getElementById('messageBox').textContent = "Game Over! Click Restart.";
        }
        if (compPts == 5) {
            document.getElementById('messageBox').textContent = "Game Over! Click Restart.";
        }
    }

        var rockBtn = document.querySelector('#rockBtn');
        var paperBtn = document.querySelector('#paperBtn');
        var scissorBtn = document.querySelector('#scissorBtn');
        
        

        rockBtn.addEventListener('click', ()=>  {
            game('rock');
            console.log("Chose Rock");
        });
        
        paperBtn.addEventListener('click', ()=>  {
            game('paper');
            console.log("Chose Paper");
        });
        
        scissorBtn.addEventListener('click', ()=>  {
            game('scissors');
            console.log("Chose Scissors");
        });
        
        
resetBtn.addEventListener('click', ()=>  {
    userPts = 0;
    compPts = 0;
    document.getElementById("userPts").textContent = userPts;
    document.getElementById("compPts").textContent = compPts;
    document.getElementById("messageBox").textContent = 'First to Five Points. Lets do it.';

});
