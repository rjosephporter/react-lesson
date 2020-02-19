import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chuck', age: 31 },
      { name: 'Mariel', age: 22 },
      { name: 'Penny', age: 1 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 33 },
        { name: 'Mariz', age: 25 },
        { name: 'Ringo', age: 5 }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person name={ person.name } age={ person.age } delete={ this.deletePersonHandler.bind(this, index) } />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={ this.togglePersonsHandler }>Toggle</button>
        { persons }
      </div>
    )
  }
}

export default App;