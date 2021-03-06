import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    { id: 'wer1', name: 'Max', age: 28},
    { id: 'tyu1', name: 'Manu', age: 29},
    { id: 'fgh1', name: 'Steff', age: 26}
  ],
  otherState: 'some other value',
  showPersons: false
}

nameChangeHandler = ( event, id ) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  //const person = Object.assign({}, this.state.persons[personIndex]);
  
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons: persons});
 }

 togglePerconsHendler = () => {
  const  doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
 }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
         return <Person 
         click={() => this.deletePersonHandler(index)}
         name={person.name}
         age={person.age}
         key={person.id}
         changed={(event) => this.nameChangeHandler(event, person.id)} />
      })}
    </div> 
  );
  style.backgroundColor = 'red';
}

let  classes = [];
if(this.state.persons.length <= 2) {
  classes.push('red'); //classes = ['red']
}
if(this.state.persons.length <= 1) {
  classes.push('bold'); //classes = ['red', 'bold']
}

return (
  <div className="App">
    <h1> Привет!</h1>
    <p className={classes.join(' ')}>это я</p>
    <button 
    style={style} 
    onClick={this.togglePerconsHendler}>Toggle Persons</button>
    {persons}
  </div>

);
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, '[fq' ))
  }
}

export default App;

/*
switchNameHandler = (newName) => {
 // console.log('x');
 //Don't do this: this.state.persons[0].name = 'Lucie';
 this.setState({
   persons: [
    {name: newName, age: 28},
    {name: 'Manu', age: 29},
    {name: 'Steff', age: 27}
  ]
  })
}
*/