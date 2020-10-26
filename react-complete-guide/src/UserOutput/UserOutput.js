import React from 'react';
import assignment1 from './assignment1.css'

const userOutput = (props) => {
    return(
        <div className = "assignment1">
            <p style={{color: "red"}} >Username: {props.userName}</p>
            <p>Some Random Text 2 !</p>
        </div>
    );
};

export default userOutput;