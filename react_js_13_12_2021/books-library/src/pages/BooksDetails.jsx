import * as style from './Books.module.css'
import React, { Component } from 'react'

export default class BooksDetails extends Component {
    render() {
        const details = this.props.details
        return (
            <div>
                BooksDetails<br/>
                <div className={style.details}>
                    <img src={details.img} style={{height:"250px",width:"200px"}}/>
                    <h1>{details.book}</h1>
                    <h3>Author: {details.author}</h3>
                    <h3>Pages: {details.pages}</h3>
                    <h3>Summary: {details.summary}</h3>
                </div>
            </div>
        )
    }
}
