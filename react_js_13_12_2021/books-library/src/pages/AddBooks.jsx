import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class AddBooks extends Component {
    state={author:"",book:"",pages:"",img:"",summary:"",isRedirect:false}
    authorInput = e => this.setState({author:e.target.value})
    bookInput = e => this.setState({book:e.target.value})
    pagesInput = e => this.setState({pages:e.target.value})
    imgInput = e => this.setState({img:e.target.value})
    summaryInput = e => this.setState({summary:e.target.value})
    isValidationOk = ()=>{
        const {author,book,pages,img,summary} = this.state;
        return author && book && img && pages && summary  && pages > 0
    }
    newBook
    render() {
        const {author,book,pages,img,summary} = this.state;
        const buttonDisable = !this.isValidationOk()
        if (this.state.isRedirect) {
            return <Redirect to="/Books"/>
        }
        return (
            <div>
                add person home
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    this.newBook = {author,book,pages,img,summary}
                    this.props.books.push(this.newBook)
                    this.setState({isRedirect:true})
                }}>
                author: <input type="text" onChange={this.authorInput}/><br/>
                book: <input type="text" onChange={this.bookInput}/><br/>
                pages: <input type="number" onChange={this.pagesInput}/><br/>
                img: <input type="text" onChange={this.imgInput}/><br/>
                summary:<br/><textarea cols="30" rows="5" onChange={this.summaryInput}/><br/>
                <button type="submit" disabled={buttonDisable}>Add book</button>
                </form>
            </div>
        )
    }
}
