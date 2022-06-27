//fuction that takes in current state and action 
//creates a new state obj that overrides prev state

const initialState = {
    board: Array(9).fill(null)
}

function reducer (currentState = initialState, action){
    console.log(currentState)
    console.log(action)

    if(action.type === "STARTGAME"){
        return {
            ...currentState,
            board: Array(9).fill(null)
        }
    }

    return currentState
}

export default reducer