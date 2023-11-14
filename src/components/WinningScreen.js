import React from 'react'

const WinningScreen = ({restartGame, playerWon}) => {
  return (
    <div className='winner'>
        <h2 className='congo'> 
        {
            playerWon === "No One"
            ? "Oops! it's a draw"
            : "congratulations"
        }
        </h2>
        <h3 className='player'> {playerWon} Won thr Game.</h3>
        <button onClick={restartGame}>
            Restart
        </button>
    </div>
  )
}

export default WinningScreen;