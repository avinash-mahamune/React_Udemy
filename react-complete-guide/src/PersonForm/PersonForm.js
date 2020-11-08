import React, { Component } from 'react';
import PersonTable from './PersonTable'

import './PersonForm.css'

    class PersonForm extends Component {

        
            constructor(props){
                super(props);
                
            }           

            apersonDatabase = new Array()

            state= {
                id:'',
                name: '',
                surname:'',
                salary:'',               
        
            }

            changeUserName = (event) => {
                this.setState({
                    name:event.target.value
                })                
            }

            changeUserSurname = (event) => {
                this.setState({
                    surname:event.target.value
                })                
            }
     
            changeUserId = (event) => {
                this.setState({
                    id:event.target.value
                })                
            }

            changeSalary = (event) => {
                this.setState({
                    salary:event.target.value
                })                
            }
     
            savePerson = (event) => {
                let c_id= this.state.id;
                let c_name= this.state.name;
                let c_surname= this.state.surname;
                let c_salary= this.state.salary;

                let currentData = {
                    id: c_id ,
                    name: c_name,
                    surname: c_surname,
                    salary: c_salary                
                }
                     this.apersonDatabase =  [...this.apersonDatabase,currentData];
                    console.log(`current DATABASE => `,this.apersonDatabase);
                     event.preventDefault();
            }

            
        render(){
            return(
                <div className="form_wrapper">
                  <h2>Please Enter your details</h2>
                        <p>ID: {this.state.id}</p>
                        <p>NAME: {this.state.name}</p>
                        <p>SURNAME: {this.state.surname}</p>
                        <p>Salary: {this.state.salary}</p>
                <form>
                    <div>
                        <div className="form-group">
                            <label>id:</label>
                            <input type="text" className="form-control" placeholder="Enter id" value={this.state.id} onChange={this.changeUserId} />
                        </div>

                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Name" value={this.state.name} onChange={this.changeUserName}  />
                        </div>

                        <div className="form-group">
                            <label>Surname:</label>
                            <input type="text" className="form-control" placeholder="Enter Surname" value={this.state.surname} onChange={this.changeUserSurname} />
                        </div>                       
                    
                        <div className="form-group">
                            <label>Salary:</label>
                            <input type="text" className="form-control" placeholder="Enter salary" name="salary" value={this.state.salary} onChange={this.changeSalary} />
                        </div>                        
                        <button type="submit" className="btn btn-primary" onClick={this.savePerson}>Submit</button>
                    </div>
                </form>


                <PersonTable data={this.apersonDatabase} />
            </div>
            )
        }       
    }

    export default PersonForm
