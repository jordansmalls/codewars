// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.


function rps(p1,p2){
  // draw
    if(p1 === p2) return "Draw!";
  // p1 scissors 
    if(p1 === "scissors" && p2 === "rock") return "Player 2 won!";
    if(p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  // p1 rock
    if(p1 === "rock" && p2 === "paper") return "Player 2 won!";
    if(p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  // p1 paper
    if(p1 === "paper" && p2 === "scissors") return "Player 2 won!";
    if(p1 === "paper" && p2 === "rock") return "Player 1 won!";
  }
  
  // alt solution
  const rpsAlt = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };
  
  
  console.log(rps("scissors", "paper")) // --> "Player 1 won!"
  console.log(rps("scissors", "rock")) // --> "Player 2 won!"
  console.log(rps("paper", "paper")) // --> "Draw!"
  console.log(rpsAlt("paper", "rock")) // "Player 1 won!"
  // tests pass