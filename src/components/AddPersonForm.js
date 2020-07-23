import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../store/repos/actions'

import '../App.css';

function AddPersonForm(props) {
    const [ person, setPerson ] = React.useState({})
    
    function handleChange(event) {
        let newPerson = { 
            name: event.target.value 
        }
        setPerson(newPerson)
    }
    
    function handleSubmit(event) {
        // Prevents the default behavior of the submit event (refreshes page)
        event.preventDefault()
        
        props.boundAddPerson(person) 
        
    }
    return (
        
<div  className="container">
        <form onSubmit={handleSubmit}>
            <div>
            <label for="user">Search Git By Name/Login </label>
            </div>
            <div>
            <input type="text" onChange={handleChange} value={person.name} />
            <button type="submit">Submit</button>
            </div>
        </form>
       </div > 
    )
}

const mapDipatchToProps = {
  boundAddPerson: addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)