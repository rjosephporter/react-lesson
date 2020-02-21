import React from 'react';
import personClasses from './Person.module.css'

const person = (props) => {
    return (
        <div className={ personClasses.Person }>
            <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
            <p><input type="text" onChange={ props.changed } value={ props.name } /></p>
            <small><button onClick={ props.delete }>Delete</button></small>
        </div>
    )
}

export default person;