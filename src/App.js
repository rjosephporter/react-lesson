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

  switchNameHandler = (newName) => {
    console.log('Clicked!')
    this.setState({ persons: [
      { name: newName, age: 33 },
      { name: 'Mariz', age: 25 },
      { name: 'Ringo', age: 5 }
    ]})
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
          { this.state.persons.map(person => {
            return <Person name={ person.name } age={ person.age } />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={ this.togglePersonsHandler }>Toggle</button>
        <button 
          onClick={ (event) => this.switchNameHandler('Chuck 1') }
          style={ style }>Switch name</button>
        { persons }
      </div>
    )
  }
}

export default App;