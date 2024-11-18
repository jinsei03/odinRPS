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
    let choice = '';
    
    return choice;
}

//const humanRPS = getHumanChoice();
//const compRPS = getComputerChoice();

//playRound(humanRPS, compRPS);
//console.log(humanScore);
//console.log(computerScore);

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const p = document.createElement("p");
results.appendChild(p);

const player = document.querySelector("#player");
const comp = document.querySelector("#comp");

const pScore = document.createElement("a");
pScore.textContent = humanScore;
player.appendChild(pScore);

const cScore = document.createElement("a");
cScore.textContent = computerScore;
comp.appendChild(cScore);

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "rock" && computerChoice == "paper")
    {
        humanScore += 1;
        checkWinner();
        player.removeChild(pScore);
        pScore.textContent = humanScore;
        player.appendChild(pScore);

        p.textContent = "You win! Rock beats Paper.";
        results.removeChild(p);
        return results.appendChild(p);
        
    }
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        computerScore += 1;
        checkWinner();
        comp.removeChild(cScore);
        cScore.textContent = computerScore;
        comp.appendChild(cScore);

        p.textContent = "You Lose! Scissors beat Rock.";
        results.removeChild(p);
        return results.appendChild(p);
    }
    else if(humanChoice == "paper" && computerChoice == "rock")
    {   
        humanScore += 1;
        checkWinner();
        player.removeChild(pScore);
        pScore.textContent = humanScore;
        player.appendChild(pScore);

        p.textContent = "You Win! Paper beats Rock.";
        results.removeChild(p);
        return results.appendChild(p);
        
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        computerScore += 1;
        checkWinner();
        comp.removeChild(cScore);
        cScore.textContent = computerScore;
        comp.appendChild(cScore);

        p.textContent = "You Lose! Scissors beats Paper.";
        results.removeChild(p);
        return results.appendChild(p);
    }
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {   
        humanScore += 1;
        checkWinner();
        player.removeChild(pScore);
        pScore.textContent = humanScore;
        player.appendChild(pScore);

        p.textContent = "You Win! Scissors beats Paper.";
        results.removeChild(p);
        return results.appendChild(p);
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        computerScore += 1;
        checkWinner();
        comp.removeChild(cScore);
        cScore.textContent = computerScore;
        comp.appendChild(cScore);

        p.textContent = "You Lose! Rock beats Scissors.";
        results.removeChild(p);
        return results.appendChild(p);
    }
    else
    {
        p.textContent = "Tie";
        results.removeChild(p);
        return results.appendChild(p);
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () =>{
    playRound("paper", getComputerChoice())
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () =>{
    playRound("scissors", getComputerChoice());
})

const win = document.createElement("p");
win.textContent = "You Win! You got to 5 first!";
const lose = document.createElement("p");
lose.textContent = "You Lose! The computer got to 5 first!";

function checkWinner()
{
    if(humanScore == 5)
        {
            if(computerScore > 5)
            {
                return results.appendChild(lose);
            }
            else
            {
                return results.appendChild(win);
            }
        }
        else if(computerScore == 5)
        {
            if(humanScore > 5)
            {
                return results.appendChild(win);
            }
            else
            {
                return results.appendChild(lose);
            }
        }
    return null;
}






