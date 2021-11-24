import { Component } from "react";
import './Register.css'

class Register extends Component{
    state={firstName:"",lastName:"",email:"",password:"",passwordConfirm:"",checkBox:""}
    userFirstName = e => this.setState({firstName:e.target.value})
    userLastName = e => this.setState({lastName:e.target.value})
    userEmail = e => this.setState({email:e.target.value})
    userPassword = e => this.setState({password:e.target.value})
    userpasswordConfirm = e => this.setState({passwordConfirm:e.target.value})
    userCheckBox = e => this.setState({checkBox:e.target.value})
    isValidationOk = ()=>{
        const {firstName,lastName,email,password,passwordConfirm,checkBox} = this.state;
        return firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && passwordConfirm.length > 0 && password === passwordConfirm && checkBox.length > 0 
    }
    submit = (e)=>{
        e.preventDefault()
        console.log(this.state);
    }
    render(){
        const disableButton = !this.isValidationOk()
        return <div style={{textAlign:"center"}}>
            <form className="Register" onSubmit={this.submit}>
                <div>
                    <h1 style={{color:"rgba(0, 0, 0, 0.712)"}}>Register</h1>
                    <p style={{fontSize:"small"}}>create your account. it's free and only take a minute</p>
                </div>
                <div className="personal">
                    <input type="text" placeholder="First name" onChange={this.userFirstName} className="name"></input>
                    <input type="text" placeholder="Last name" onChange={this.userLastName} className="name"></input>
                </div>
                <input type="email" placeholder="Email" onChange={this.userEmail} className="input"></input>
                <input type="password" placeholder="Password" onChange={this.userPassword} className="input"></input>
                <input type="password" placeholder="Confirm password" onChange={this.userpasswordConfirm} className="input"></input>
                <div className="checkBox">
                <input type="checkbox" onChange={this.userCheckBox}></input>
                <p style={{fontSize:"small"}}>i accept the <a href="https://e-commerce-server-db.herokuapp.com/" style={{color:"green",textDecoration:"none"}}>Terms of use</a> & <a href="https://e-commerce-server-db.herokuapp.com/" style={{color:"green",textDecoration:"none"}}>Privacy policy</a></p>
                </div>
                <button type="submit" disabled={disableButton} className="btn">Register now</button>
            </form>
        </div>
    }
}

export default Register