import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { name: 'Liz', age: '35' },
      { name: 'Sarah', age: '39' }, 
      { name: 'Max', age: '28' }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('clickity click click clickeroo...');
    // DON'T DO THIS: this.state.persons[0].name = 'Elizabeth';
    // DO THIS INSTEAD:
    this.setState({
      persons: [
        { name: newName, age: '35' },
        { name: 'Sarah', age: '40' },
        { name: 'Max', age: '28' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'liz', age: '35' },
        { name: 'Sarah', age: '40' },
        { name: event.target.value, age: '28' }
      ]
    })
  } 

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid salmon',
      padding: '8px', 
      cursor: 'pointer'
    };
    // this return statement with jsx gets rendered by React as the React.createElement script below
    return (
      //I am the root element...it is best practice to wrap jsx in one root element
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working super rad react</p>
         {/* () => this.blahblah('moreblah') syntax can be performance heavy use .bind whenever possible */}
        <button 
          style={ style }
          onClick={ () => this.switchNameHandler('liz biz') }>Switch Name</button>
        <Person 
          name={ this.state.persons[0].name }  
          age={ this.state.persons[0].age } />
        <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age } />
        <Person 
          name={ this.state.persons[2].name} 
          age={ this.state.persons[2].age }
          click={ this.switchNameHandler.bind(this, 'Lizzie') }
          changed={ this.nameChangedHandler } >I am the React instructor</Person>
      </div>
    );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
  }
}

export default App;
