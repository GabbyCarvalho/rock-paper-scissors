import { useState } from "react"
import Game from "../page/Game"


const moves = ["rock", "paper", "scissors"]

const rules = {
  rock: {
    winsAgainst: "scissors",
  },
  paper: {
    winsAgainst: "rock",
  },
  scissors: {
    winsAgainst: "paper",
  },
}

export default function PlayingGame() {
    const [playerTurn, setPlayerTurn] = useState("")
    const [computerTurn, setComputerTurn] = useState("")
    const [result, setResult] = useState("")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    const handleClick = (playerMove) => {

        const computerMove = moves[Math.floor(Math.random() * moves.length)]
        let roundResult = ""

        if(playerMove === computerMove) {
            roundResult = "Tied"
        } else if (rules[playerMove].winsAgainst === computerMove){
            roundResult = "You won!"
            setPlayerScore(prev => prev + 1)
        } else {
            roundResult = "Computer won!"
            setComputerScore(prev => prev + 1)
        }
        setPlayerTurn(playerMove)
        setComputerTurn(computerMove)
        setResult(roundResult)

        }

        const resetGame = () => {
            setPlayerTurn("")
            setComputerTurn("")
            setResult("")
            setPlayerScore(0)
            setComputerScore(0)
            
        }
        
    return(

        <Game
        playerTurn={playerTurn}
        computerTurn={computerTurn}
        playerChoose={handleClick}
        result={result}
        playerScore={playerScore}
        computerScore={computerScore}
        resetGame={resetGame}
        />
    )
}

