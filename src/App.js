import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Chuck', age: 31 },
      { name: 'Mariel', age: 22 },
      { name: 'Penny', age: 1 }
    ]
  })
  const [ otherState, setOtherState ] = useState("Some other value")

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('Clicked!')
    setPersonsState({ persons: [
      { name: 'Richard', age: 33 },
      { name: 'Mariz', age: 25 },
      { name: 'Ringo', age: 5 }
    ]})
  }
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={ switchNameHandler }>Switch name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age } />
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My Hobbies: Eating</Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age } />
    </div>
  )
}

export default App;