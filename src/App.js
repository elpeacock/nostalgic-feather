import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: 'kladsjf', name: 'Liz', age: '35' },
      { id: 'ioqwefj', name: 'Sarah', age: '39' }, 
      { id: 'xncvzxk', name: 'Max', age: '28' }
    ], 
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('clickity click click clickeroo...');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Elizabeth';
  //   // DO THIS INSTEAD:
  //   this.setState({
  //     persons: [
  //       { name: newName, age: '35' },
  //       { name: 'Sarah', age: '40' },
  //       { name: 'Max', age: '28' }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    // holds index where persons.id === id returns true
    const changeIndex = this.state.persons.findIndex( p => { 
      return p.id === id;
    });
    // //mutable change == BAD
    // const changePerson = this.state.persons[changeIndex]
    // immutable change == GOOD
    const changePerson = { 
      ...this.state.persons[changeIndex]
    };

    changePerson.name = event.target.value;

    const personsMod = [...this.state.persons];
    personsMod[changeIndex] = changePerson;

    this.setState({
      persons: personsMod
    })
  } 

  deletePersonHandler = (personIndex) => { 
    // // slice with no args makes a copy of the array
    // const persons = this.state.persons.slice();
    // [...] spread operator, will act like slice in this situation
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
    // making the copy of the original array then doing stuff to it and then assigning copy to original makes the array immutable ---- state should always be set immutably!!!
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid salmon',
      padding: '8px', 
      cursor: 'pointer'
    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => { 
            return <Person
              click={ this.deletePersonHandler }
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={ (event) => this.nameChangedHandler(event, person.id) } />
          })}
        </div>
      )
    }
    // this return statement with jsx gets rendered by React as the React.createElement script below
    return (
      //I am the root element...it is best practice to wrap jsx in one root element
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working super rad react</p>
         {/* () => this.blahblah('moreblah') syntax can be performance heavy use .bind whenever possible */}
        <button 
          style={ style }
          onClick={ this.togglePersonsHandler }>Show People
        </button>
        { persons }

      </div>
    );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
  }
}

export default App;
