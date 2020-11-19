import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
import OutputUser from './Person/OutputUser';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import PersonForm from './PersonForm/PersonForm';

import Product from './Product'

class App extends Component {

  constructor(props){
    super(props);
    // console.log('[App.js] constructor..');
  }

  state = {
    person: [
      {id:'1', name: "Max", age: 28},
      {id:'2', name: "Manu", age: 25},
      {id:'3', name: "jhon", age: 18}
    ],
    showPerson: false
  }

  static getDerivedStateFromProps(props, state){
    // console.log('[App.js] getDerivedStateFromProps.. ',props);
    return state;
  }

  componentDidMount(){
    // console.log('[App.js] componentDidMount');
  }
  render() {
    // console.log('[App.js] Render...') ;

  const btnStyle = {
    backgroundColor: 'green',
    color: '#fff',
    padding: '10px',
    border: '1px solid black',
    font: 'inherit',
    margin: '5px 20px',
    ':hover':{
      backgroundColor: 'lightgreen',
      color:'black'
    }
        }
   
    let personData = null;

    if(this.state.showPerson){
      personData = (
        <div>
         { this.state.person.map( (item, index) =>{
           return  <Person 
           click= {this.deletePersonHandler.bind(index)}
           name= {item.name} 
           age= {item.age} 
           key= {item.id}
           />
         })

         } 
      </div>
      );

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'lightcoral',
        color:'black'
      }
    }

    let classes = [];
    if(this.state.person.length <=2){
      classes.push('red');
    }
    if(this.state.person.length <=1){
      // classes.pop();
      classes.push('bold');
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
          <p className={classes.join(' ')}>This is really working..</p>
          <button style = {btnStyle} onClick= { this.togglePersonHandler}>show/hide</button>
          <button  onClick= { () => this.switchNameHandler("MAHAMUNE") }>Switch Name</button>       
          {personData}
          <div>
            <h1>React Life Cycle</h1>
            <Product />
          </div>
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
 
  deletePersonHandler = (personIndex) => {
    const latestPerson = [...this.state.person];
    latestPerson.splice(personIndex, 1);
    this.setState({
      person: latestPerson
    })
  }

}

export default Radium(App);
