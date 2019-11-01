import React, { Component } from 'react';
import './App.css';
import Persons from '../component/Persons/Persons'


class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Max', age: 27 },
      { id: 2, name: 'Manuca', age: 28},
      { id: 3, name: 'Katrina', age: 22}
    ],
    showPersons: false,
    edit: false

  }

  // handleChangeName = () => {

  //   this.setState({
  //     persons: [
  //       {name: 'Kiwi', age: 27},
  //       {name: 'Eunice', age:28},
  //       {name: 'Katrina', age: 22}
  //     ]
  //   })
  // }


  handleTogglePersons = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    })
  }

  handleDeletePersons = (personIndex) => {
    //const pIndex = this.state.persons;
    const pIndex = [...this.state.persons];
    pIndex.splice(personIndex, 1);
    this.setState({
      persons: pIndex
    })
    //console.log(pIndex)
  }

  handleChangeName = (e, id) => {
    const personIndex = this.state.persons.findIndex( (singlePerson) => {
      return (
        singlePerson.id === id
      )
    })
    console.log('personIndex',personIndex)
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log('person',person)
    //const person = Object.assign({}, this.state.persons[p])
    person.name = e.target.value;

    const persons = [...this.state.persons];
   // console.log('persons')
    persons[personIndex] = person;

    this.setState({
      persons: persons

    });

  }

  handleEdit = (ed) => {
    this.setState({
      edit: !ed,
    })
  }

  render() {

    let person = null;
    const {edit} = this.state;
    const style = {
      backgroundColor: 'green',
      color: 'white',
    }  
    if (this.state.showPersons) {
      person = (
        <div>
     
          <button onClick={() => this.handleEdit(edit)}>Edit</button>

          <Persons persons={this.state.persons} 
          clicked={this.handleDeletePersons}
          changed={this.handleChangeName} />

        </div>
      );

      style.backgroundColor = 'blue';
    }

    //let classes = ['red', 'bold'].join(' '); // red bold
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
      <div id="sec-login App">
        <div className="login-wrapper">
          <div className="login-inner-wrapper">
          <h1>Login</h1>
          <p className={classes.join(' ') }>This is really working</p>
          <button onClick={this.handleTogglePersons}  style={style}>Toggle</button>
          
          {person}
        </div>
        </div>
      </div>
    )
  }
}


export default App;

