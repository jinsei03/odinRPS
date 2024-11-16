function getComputerChoice()
{
    let choice;
    let rps = Math.floor(Math.random() * 3);
    if(rps == 0){
        choice = "rock";
    }
    else if(rps == 1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;

}
//console.log(getComputerChoice());

function getHumanChoice()
{
    let choice;
    let rps = prompt("Rock, paper, or scissors?");
    if(rps.toLowerCase() == "rock")
    {
        choice = "rock";
    }
    else if(rps.toLowerCase() == "paper")
    {
        choice = "paper";
    }
    else
    {
        choice = "scissors";
    }
    return choice;
}

//const humanRPS = getHumanChoice();
//const compRPS = getComputerChoice();

//playRound(humanRPS, compRPS);
//console.log(humanScore);
//console.log(computerScore);

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        if(humanChoice == "rock" && computerChoice == "paper")
        {
            humanScore += 1;
            return console.log("You win! Rock beats Paper.");
        }
        else if(humanChoice == "rock" && computerChoice == "scissors")
        {
            computerScore += 1;
            return console.log("You Lose! Scissors beat Rock.");
        }
        else if(humanChoice == "paper" && computerChoice == "rock")
        {   
            humanScore += 1;
            return console.log("You Win! Paper beats Rock.");
        }
        else if(humanChoice == "paper" && computerChoice == "scissors")
        {
            computerScore += 1;
            return console.log("You Lose! Scissors beats Paper.");
        }
        else if(humanChoice == "scissors" && computerChoice == "paper")
        {   
            humanScore += 1;
            return console.log("You Win! Scissors beats Paper.");
        }
        else if(humanChoice == "scissors" && computerChoice == "rock")
        {
            computerScore += 1;
            return console.log("You Lose! Rock beats Scissors.");
        }
        else
        {
            return console.log("Tie");
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    return console.log(`Final scores:
    YOU: ${humanScore}
    COMPUTER: ${computerScore}`);
}
playGame();
