import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        // const details = this.props.details
        return (
            <div>
                Details page
                <h3>{this.props.details.name}</h3>
                <p>{this.props.details.age}</p>
                <p>{this.props.details.biography}</p>
            </div>
        )
    }
}
