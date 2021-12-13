import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Person extends Component {
    state={redirect:false,isDetails:false}
    render() {
        if (this.state.redirect) {
            return <Redirect to="/AddPerson"/>
        }
        if (this.state.isDetails) {
            return <Redirect to="/Details" />
        }
        const personsElement = this.props.persons.map((it,i)=>(
            <div key={i}>
            <h2>{it.name},{it.age}</h2>
            <button onClick={()=>{
                this.props.getDetails(it)
                this.setState({isDetails:true})
            }}>Details</button>
            </div>
        ))
        return (
            <div>
                Person page<br/>
                <button onClick={()=>this.setState({redirect:true})}>Add person</button>
                {personsElement}
            </div>
        )
    }
}
