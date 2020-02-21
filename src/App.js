import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green' };
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`

class App extends Component {
  state = {
    persons: [
      { id: 'fsdf23sddfsg', name: 'Chuck', age: 31 },
      { id: 'jklshdf2', name: 'Mariel', age: 22 },
      { id: 'lkfghjkfg', name: 'Penny', age: 1 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    let persons = null

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              name={ person.name } 
              age={ person.age } 
              delete={ this.deletePersonHandler.bind(this, index) } 
              key={ person.id }
              changed={ (event) => this.nameChangeHandler(event, person.id) }/>
          })}
        </div>
      )
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red')
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p className={ classes.join(' ') }>This is a react app</p>
        <StyledButton alt={ this.state.showPersons } onClick={ this.togglePersonsHandler }>Toggle</StyledButton>
        { persons }
      </div>
    )
  }
}

export default App;