import axios from 'axios'
import {useRef,useState} from 'react'
import { Redirect } from 'react-router-dom'
import API_KEY from '../apiKey/ApiKey'

export default function Register({setAuth}) {
    const [isErrorFromServer, setisErrorFromServer] = useState(false)
    const emailRef = useRef("")
    const passwordRef = useRef("")
    function register() {
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {email:emailRef.current.value,password:passwordRef.current.value})
        .then(res=>{
            setAuth(res.data)
        })
        .catch(err=>{
            setisErrorFromServer(err)
            console.log(err);
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                register()
            }}>
                <input ref={emailRef} type="email" placeholder='Email'/><br/>
                <input ref={passwordRef} type="password" placeholder='password'/><br/>
                <button type="submit" onClick={()=><Redirect to="/Authenticated"/>}>Register</button>
            </form>
            {isErrorFromServer ? <p style={{color:"red"}}>ERROR</p> : ""}
        </div>
    )
}
