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
  render() { 
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button>Switch name</button>
        <Person name={ this.state.persons[0].name } age={this.state.persons[0].age} />
        <Person name={ this.state.persons[1].name } age={this.state.persons[1].age}>My Hobbies: Eating</Person>
        <Person name={ this.state.persons[2].name } age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
