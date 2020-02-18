import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Person name="Chuck" age="31" />
      <Person name="Mariel" age="22">My Hobbies: Eating</Person>
      <Person name="Penny" age="1" />
    </div>
  );
}

export default App;
