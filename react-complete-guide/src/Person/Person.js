import React from 'react'

import './Person.css';


const person = (props) => {
    console.log('[Person.js] child')
    return (
        <div className = "Person">
            <p className ="info" onClick = {props.click}>I'm a {props.name} and Age: {props.age}</p>
            <p>{props.children}</p>
            <input onChange = {props.changed} value = {props.name} />
        </div>
    )
};


export default person; 