import React from 'react'
import RenderData from './RenderData'



const personTable = (props) => {
    let allPersonsData = [{id: "a", name: "a", surname: "a", salary: "a",},
    {id: "asadas", name: "aasdas", surname: "asadsa", salary: "aasdsa"}
]
    console.log(`TABLE ==>`,allPersonsData);
    return (
        <div>
            {/* <button onClick={this.renderTableData}></button> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>LastName</th>
                        <th>Lastname</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                  <RenderData data={allPersonsData}/>
                </tbody>
            </table>
        </div>
    )
}



// asdrenderTableData = () => {



    // return this.allPersonsData.map((person, index) => {
    //     const {id, name, surname, salary} = person
    //     return(
    //         <tr key={id}>
    //             <td>{id}</td>
    //             <td>{name}</td>
    //             <td>{surname}</td>
    //             <td>{salary}</td>
    //         </tr>
    //     )
    // })
// }


 
export default personTable