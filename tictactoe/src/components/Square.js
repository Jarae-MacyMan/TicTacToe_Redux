import React from "react";
//import { useContext } from 'react';
//import Context from '../context/Context';
import store from '../app/store';


const style = {
    background: 'white',
    border: '2px solid black',
    fontSize: '30px',
    fontweight: '800',
    cursor: 'pointer',
    outline: 'none'
}

//props obj 
// const props = {
//     onClick: () => "function",
//     value: "X"
// }

//destructure from obj and get value dont need props.value
//const {value} = props

//instead of props in the parameters its 

const Square = ({value, onClick}) => (

    < button className="col" style = {style} onClick={onClick}>
        {value}
    </button>
)

export default Square