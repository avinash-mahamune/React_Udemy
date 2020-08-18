import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {name: "Max", age: 28},
      {name: "Manu", age: 25},
      {name: "jhon", age: 18}
    ]
  }


  render() {
    
  const style = {
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid black',
    font: 'inherit'
        }

    return (
      <div className="App">
        
          <h1 className="App-title">Welcome to React</h1>
          <p>This is really working..</p>

          <button style = {style} onClick= { () => this.switchNameHandler("MAHAMUNE") }>Switch Name</button>
          <Person name = {this.state.person[0].name} age = {this.state.person[0].age}></Person>
          <Person name = {this.state.person[1].name} age = {this.state.person[1].age} click = {this.switchNameHandler.bind(this,"Ganesh")}></Person>
          <Person name = {this.state.person[2].name} age = {this.state.person[2].age} changed = {this.changeNameHandler}></Person>             

      </div>
    );
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

 

}

export default App;
