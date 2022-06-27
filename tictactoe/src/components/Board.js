import React from "react";
// import { useContext } from "react";
// import Context from "../context/Context";
import Square from "./Square";
import store from '../app/store';




const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height:'250px',
    margin: '0 auto' 
}

function Board ({squares, onClick}){
//const Board = ({squares, onClick}) => (
    //const context = useContext(Context)
    //crated value prop in square so dont need {}
    //prop drilling


    // const x = useContext(Context)
    // console.log(x)


    
    return(
    <div style = {style} className="row row-cols-3"> 
        {squares.map((square, i) => (
            //when we map trhough things in react we need to set a key(index in this case)
            //put square in value b/c that is the array element of x or o
            //onclick sends index value 
            <Square key={i} value ={square} onClick={() => onClick(i)}/>
        ))}
    </div>
    )
}

export default Board