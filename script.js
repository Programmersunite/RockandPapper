
    //Rock paper scissor
    //computerPlay
    //List of Rock paper scissors
    rockPapSci = [ "rock", "paper", "scissors"]

    // function with comp. choice
    computerChoice = function (){
        return rockPapSci[Math.floor(Math.random()*rockPapSci.length)]
        }
    //playerChoice function with prompt and input

    
    //playerChoice = function(buttonSelect){
    //   let choice = buttonSelect.value;
    //   return choice
    //}

    //print result function
    // returns: you win/lose and all rock/paper/scisors beats rock/paper/scisoors
        // or remiss
    printResults = function(computerHand,playerHand,score){
        if(score === 0){
            console.log(`Remis both choose ${score}`)
            resultDiv.textContent = `Remis both choose ${score}`
        } else if(score === 1){
            console.log(`Remis both choose ${score}`)
            resultDiv.textContent = `You Won! ${playerHand} beats ${computerHand}`
        }else{
            console.log(`Remis both choose ${score}`)
            resultDiv.textContent = `You Lose!  ${computerHand} beats ${playerHand}`
            console.log(resultDiv)
        }
    }
    //buttons for player
    const buttons = document.querySelectorAll('button');
 

// we use the .forEach method to iterate through each button
let playerScore=0
let computerScore=0
let winner = false
  // and for each one we add a 'click' listener
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    tempScore= (playRound(button.id))
    console.log(tempScore)

    if (tempScore <0) {
            computerScore++
            } else if (tempScore >0){
            playerScore++
            } else {return}
            scorePara.textContent=`Player ${playerScore} / Computer ${computerScore}`
            if(playerScore>4 || computerScore>4){
                winner=true
                if(playerScore>computerScore){
                    scorePara.textContent='YOU won'
                }else{
                    scorePara.textContent="Computer won"
                }
            }else {return}

        })
  })
    //playRound function
    playRound = function (playerButton){
    // takes player seclection and computerPlay
        let computerHand = computerChoice()
    // assign input to playerSelection
        let playerHand = playerButton.toLowerCase()
        let score = 0
    // tests who wins
        if(computerHand===playerHand){
           printResults(computerHand,playerHand,score)
        }else if (playerHand==="paper"&&computerHand==="rock" ||
                    playerHand==="rock"&&computerHand==="scissors" ||
                    playerHand==="scissors"&&computerHand==="paper"){
                        score = 1
                        printResults(computerHand,playerHand,score)
                    }
                    else{
                        score = -1
                        printResults(computerHand,playerHand,score) 
                    }
        return score}
    //Game function 
    // plays playRound 5 times
    // console.log the results and adds a score
    
//Creating DOM elements
//Score display
const resultDiv =document.createElement("p")
const scoreDiv =document.querySelector('.score')
const scorePara=document.createElement("p")


scoreDiv.appendChild(resultDiv)
scoreDiv.appendChild(scorePara)
//buttons
