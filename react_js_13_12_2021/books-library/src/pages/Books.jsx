import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import * as style from './Books.module.css'

export default class Books extends Component {
    state={redirect:false,isDetails:false}
    render() {
        if (this.state.redirect) {
            return <Redirect to="/AddBooks"/>
        }
        if (this.state.isDetails) {
            return <Redirect to="/BooksDetails" />
        }
        const bookElement = this.props.books.map((it,i)=>(
            <tr key={i}>
                <td className={style.books} style={{width:"8px"}}>{i}</td>
                <td className={style.books}>{it.author}</td>
                <td className={style.books}>{it.book}</td>
                <td className={style.books}><button onClick={()=>{
                this.props.bookDetails(it)
                this.setState({isDetails:true})
            }}>Details</button></td>
            </tr>
        ))
        return (
            <div className={style.tableContainer}>
                Book page<br/>
                <button onClick={()=>this.setState({redirect:true})}>Add Book</button>
                <table className={style.table}>
                    <tbody>
                        <tr>
                            <th className={style.Books}>No.</th>
                            <th className={style.Books}>Author</th>
                            <th className={style.Books}>Book</th>
                            <th className={style.Books}>Details</th>
                        </tr>
                        {bookElement}
                    </tbody>
                </table>
            </div>
        )
    }
}
