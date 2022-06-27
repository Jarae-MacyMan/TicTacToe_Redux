export function calculateWinner (squares) {
    const lines = [
        [0, 1, 2],
        [3,4, 5],
        [6,7, 8],
        [0,3, 6],
        [1, 4, 7],
        [2,5, 8],
        [0,4, 8],
        [2,4, 6]
    ]
    for(let i = 0; i < lines.length; i++){
        //destructure 
        //gives each row the variables abc as 1 index of a winnig move
        const [a, b, c] = lines[i]
        //if a player has marked a box alr and if it == to the next 2 boxes we return the player turn wich is the character in the box alr else return null
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null
}