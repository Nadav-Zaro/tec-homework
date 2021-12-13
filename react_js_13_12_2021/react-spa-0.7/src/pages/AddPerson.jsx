import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class AddPerson extends Component {
    state={isRedirect:false}
    newPerson
    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/Person"/>
        }
        return (
            <div>
                add person home
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    let person= e.currentTarget
                    this.newPerson = {name:person.name.value,age:person.age.value,biography:person.biography.value}
                    console.log(this.newPerson);
                    this.props.persons.push(this.newPerson)
                    this.setState({isRedirect:true})
                }}>
                Name: <input type="text" name='name'/><br/>
                Age: <input type="number" name='age'/><br/>
                Biography:<br/><textarea cols="30" rows="5" name='biography'/><br/>
                <button type="submit">Add person</button>
                </form>
            </div>
        )
    }
}
