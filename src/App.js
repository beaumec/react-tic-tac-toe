import {React, useState, useEffect} from "react";
import "./App.css";
import Square from "./components/Square";
import { Patterns } from "./pattern.js";
import WinningScreen from "./components/WinningScreen.js";



function App() {
  // box index
const [board, setBoard] = useState(["","","","","","","","",""]);
// player turn
const [player, setPlayer] = useState("X");
// result
const [result, setResult] = useState({winner: "none", state: "none"});
// checkWin
const [won, setWin] = useState(false);

const handleClick = (square) => {
  setBoard(
    board.map((val,idx) => {
      if (idx === square && val === "") {
        return player;       
      }
      console.log(board)
      return val
    })
  );
}

useEffect(() => {

  checkWin();
  checkIfTie()

  if(player == "X") {
    setPlayer("O")
  } else {
    setPlayer("X")     
    
  }
}, [board])


// render Winner
useEffect(() => {
 
  if (result.state != "none") {
    setWin(true)
    // alert(`game Finished Winning Player: ${result.winner}`)
  }
},[result]);


//  Check for winning patterns

const checkWin = () => {
  Patterns.forEach((currentPattern) => {
    const firstPlayer = board[currentPattern[0]];
    if (firstPlayer == "")return;
    let foundWinningPattern = true;
    currentPattern.forEach((idx) => {
      if (board[idx] != firstPlayer) {
        foundWinningPattern = false;
      }
    });
    if (foundWinningPattern) {
      setResult({winner: player, state: "Won"});
     
    }
  });
};

const restartGame = () => {
  setBoard(["","","","","","","","",""]);
  setPlayer("X")
  setWin(false)
}

// checking for tie
const checkIfTie = () => {
  let filled = true;
  board.forEach((square) => {
    if (square == "") {
      filled = false;
    }
  })
  if (filled) {
    setResult({ winner: "No One", state: "Tie"})
  }
};



  return (
    <div className="App">
    
      <div className="board">
      <h1 className="title">Let's Play < br /> Tic Tac Toe</h1>
        <div className="row">
          <Square chooseSquare={() => {handleClick(0)}} val={board[0]}/>
          <Square chooseSquare={() => {handleClick(1)}} val={board[1]}/>
          <Square chooseSquare={() => {handleClick(2)}} val={board[2]}/>
      
          
        </div>
        <div className="row">
          <Square chooseSquare={() => {handleClick(3)}} val={board[3]}/>
          <Square chooseSquare={() => {handleClick(4)}} val={board[4]}/>
          <Square chooseSquare={() => {handleClick(5)}} val={board[5]}/>
      
          
        </div>
        <div className="row">
          <Square chooseSquare={() => {handleClick(6)}} val={board[6]}/>
          <Square chooseSquare={() => {handleClick(7)}} val={board[7]}/>
          <Square chooseSquare={() => {handleClick(8)}} val={board[8]}/>
      
          
        </div>
      </div>
      {won? <WinningScreen restartGame={restartGame} playerWon={result.winner} /> : <button restartGame= {restartGame}> Restart</button>}
    </div>
  );
}

export default App;
