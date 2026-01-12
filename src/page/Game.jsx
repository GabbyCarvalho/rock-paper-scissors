export default function Game(props) {

    return(
        <main>
            <header>
                <h1>Rock ✊ - Paper 🖐️ - Scissors ✌️ </h1>
            </header>
            <div className="gameBoard">
              <div className="player">
                <div className="box">
                    {props.playerTurn && (
                        <img src={`/src/Assets/${props.playerTurn}.svg`} 
                        alt={props.playerTurn} 
                        />
                    )}
                </div>
                <span className="namePlayer">YOU</span>
              </div>

              <div className="vs"> X </div>

              <div className="player">
                <div className="box">
                    {props.computerTurn && (
                        <img 
                        src={`/src/Assets/${props.computerTurn}.svg`}
                         alt={props.computerTurn}  />
                    )}
                </div>
                <span className="namePlayer">COMPUTER</span>
                
              </div>
            </div>
            
            <div className="choices">
                <h2>Choose to win! </h2>
                <div className="buttons">
                <button className="choice-btn" onClick={() => props.playerChoose("rock")} >
                    <img src="/src/Assets/rock.svg" alt="rock" />
                </button>
                <button className="choice-btn" onClick={() => props.playerChoose("paper")}>
                    <img src="/src/Assets/paper.svg" alt="paper" />
                </button>
                <button className="choice-btn" onClick={() => props.playerChoose("scissors")}>
                    <img src="/src/Assets/scissors.svg" alt="scissors" />
                </button>
                </div>
            </div>

            <div className="roundScore">
                {props.result && <p>{props.result}</p>}
            </div>


            <div className="scoreBoard">
                <h2>Score Board:</h2>
                <div className="board">
                    <div className="player">
                    <div className="box-score">{props.playerScore}</div>
                    <span>YOU</span>
                    </div>
                     <div className="vs"> X </div>
                <div className="player">
                    <div className="box-score">{props.computerScore}</div>
                    <span>COMPUTER</span>
                </div>
                </div>
            </div>

            <div className="resetButton">
                <button className="reset" onClick= {props.resetGame}>Reset Game</button>
            </div>
        </main>
    )
}