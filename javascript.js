function playGame(){
  let player_score = 0
  let computer_score = 0
  for(let i=0;i<5;i++){
    let result = playRound(getPlayerSelection(),getComputerChoice())
    if(result==0){
      computer_score++
    }
    if(result==1){
      player_score++
    }
    console.log("Player " + player_score + " - " + computer_score + " Computer")
  }
  if(player_score>computer_score){
    console.log("Player Wins!")
  }
  if(computer_score>player_score){
    console.log("Computer Wins!")
  }
  if(computer_score==player_score){
    console.log("It's a Tie!")
  }
}

function playRound(playerSelection,computerSelection){
  if(playerSelection=="Rock"){
    if(computerSelection=="Rock"){
      return logTie(playerSelection,computerSelection)
    }
    if(computerSelection=="Paper"){
      return logLoss(playerSelection,computerSelection)
    }
    if(computerSelection=="Scissors"){
      return logWin(playerSelection,computerSelection)
    }
  }
  if(playerSelection=="Scissors"){
    if(computerSelection=="Scissors"){
      return logTie(playerSelection,computerSelection)
    }
    if(computerSelection=="Rock"){
      return logLoss(playerSelection,computerSelection)
    }
    if(computerSelection=="Paper"){
      return logWin(playerSelection,computerSelection)
    }
  }
  if(playerSelection=="Paper"){
    if(computerSelection=="Paper"){
      return logTie(playerSelection,computerSelection)
    }
    if(computerSelection=="Scissors"){
      return logLoss(playerSelection,computerSelection)
    }
    if(computerSelection=="Rock"){
      return logWin(playerSelection,computerSelection)
    }
  }
}

function logLoss(playerSelection,computerSelection){
  console.log("You Lose! " + computerSelection + " beats " + playerSelection)
  return 0
}

function logWin(playerSelection,computerSelection){
  console.log("You Win! " + playerSelection + " beats " + computerSelection)
  return 1
}

function logTie(playerSelection,computerSelection){
  console.log("It's a Tie! " + playerSelection + " ties with " + computerSelection)
}

function getPlayerSelection(){
  let selection = prompt("Choose: Rock, Paper or Scissors")
  return selection[0].toUpperCase() + selection.slice(1).toLowerCase()
}

function getComputerChoice(){
  var options = ["Rock", "Paper", "Scissors"]
  return options[Math.floor(Math.random()*options.length)]
}

playGame()