import React, {useState} from 'react';
// import { useContext } from 'react';
// import Context from '../context/Context';
import {calculateWinner} from '../helper' 
import Board from "./Board";
import store from '../app/store';
import { connect } from 'react-redux';

const styles = {
    width: '200px',
    margin: '20px auto',

}

function Game (props) {
    console.log("Game Props", props)
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    console.log(store.getState())

                //need i as an argument for boardcopy 
    const handleClick = i => {
        //spread operator to copy an array
        const boardCopy = [...board]
        //if user clicked an ocupied square or if game is won 
        //if winner is true of if copy has something in the occupied square
        if(winner || boardCopy[i]) return
        //put an x or o in clicked square 
        //if x is next = true put x in the sauare else put O
        boardCopy[i] = xIsNext ? "X" : "O" //accsess currently clicked square
        //sets the board as the new mutated copy
        setBoard(boardCopy)
        setXisNext(!xIsNext) //will return opposite value switches it bck and fourth 
        
    }

    const startGame = () => {
        store.dispatch({type:"STARTGAME"})
        console.log("newState", store.getState())
    }

    // const renderMoves = () => (

        
          //store.dispatch()
        
    //     //resets the board 
        
    //    <button onClick={ ()=> setBoard(Array(9).fill(null))}> 
    //         Start Game 
    //    </button>
    // )
    //create a fragment <> </>
    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}>
                {/* check if there is a winner */}
                <p>{winner ? `Winner ${winner}` : `Next Player: ${(xIsNext ? 'X' : 'O')}`}</p>
                {(
                    <button onClick={startGame}> 
                        Start Game 
                    </button>
                )}
            </div>
        </>
    )
} 
//inject prop to component
//takes in state and returns a props obj
function mapStateToProps(state){
    return{
        startGame: state.board
    }
}

export default connect(mapStateToProps)(Game);

//()=> setBoard(Array(9).fill(null))

//props.startGame
//props.board
