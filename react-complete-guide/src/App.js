import React, { Component } from 'react';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css"

import Person from './Person/Person';
import OutputUser from './Person/OutputUser';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import PersonForm from './PersonForm/PersonForm';

class App extends Component {

  state = {
    person: [
      {name: "Max", age: 28},
      {name: "Manu", age: 25},
      {name: "jhon", age: 18}
    ],
    username: "Super Avinash",
    showPerson: false
  }


  render() {
    
  const style = {
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid black',
    font: 'inherit'
        }

    let persons = null;
        if(this.state.showPerson){
        persons = (
          <div>
            {this.state.person.map(person =>{
              return <Person name={person.name} age={person.age} />
            })}
        </div> 
        ) 

        }

    return (
      <div className="App">
        
          <h1 className="App-title">Welcome to React</h1>
          <p>This is really working..</p>

          <button style = {style} onClick= { () => this.switchNameHandler("MAHAMUNE") }>Switch Name</button>
          <button style = {style} onClick= {this.showPersonHandler}>Show Person</button>
         
          

      {/* <OutputUser /> */}

      <br /><br />
      
      {persons}

      <h2>Assignment 1st</h2>
      <UserInput changed = {this.changeUserNameHandler} currentName = {this.state.username} />
      <UserOutput userName = {this.state.username} />
      <UserOutput userName = {this.state.username} />
      <UserOutput userName = "AVIANSH" />

      <br /><br />
      <PersonForm />
      

      <br /><br /><br /><br />
      </div>
    );
  }


  showPersonHandler = () => {
    const doesShow = this.state.showPerson;
    
    this.setState({
      showPerson: !doesShow
    })
  }

    changeNameHandler = (event) => {
      this.setState ({
        person: [
          {name: 'MAX', age: 28},
          {name: "Manu", age: 25},
          {name: event.target.value, age: 18}
        ]
        })
    }

  switchNameHandler = (newName) => {
    console.log('Im Clicked');
    this.setState ({
      person: [
        {name: newName, age: 28},
        {name: "Manu", age: 25},
        {name: "Robbin", age: 18}
      ]
      }
    )
  }

  
  changeUserNameHandler = (event)=> {
    this.setState({
      username : event.target.value
    })
  }


}

export default App;
