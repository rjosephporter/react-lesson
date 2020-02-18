import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chuck', age: 31 },
      { name: 'Mariel', age: 22 },
      { name: 'Penny', age: 1 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Clicked!')
    this.setState({ persons: [
      { name: newName, age: 33 },
      { name: 'Mariz', age: 25 },
      { name: 'Ringo', age: 5 }
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={ (event) => this.switchNameHandler('Chuck 1') }>Switch name</button>
        <Person 
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age } />
        <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Chuck 2') }>My Hobbies: Eating</Person>
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age } />
      </div>
    )
  }
}

export default App;