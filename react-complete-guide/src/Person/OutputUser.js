
import React, { Component } from 'react';


class OutputUser extends Component {

     state ={
        name: 'AVINASH',
        surename: 'MAHAMUNE',
        designation: 'UI Developer',
        mobile: 1234567890
    }

    render(){

        return(
            <div>
                <h1>Output User</h1>
                <p>My Name is : {this.state.name}</p>
                <p>My Surname is : {this.state.surename}</p>
                <p>My Designation is : {this.state.designation}</p>
                <p>My Mobile is : {this.state.mobile}</p>
            </div>
        )
    }
}

export default OutputUser;