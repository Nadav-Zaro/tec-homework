import {useRef,useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import API_KEY from '../apiKey/ApiKey'

export default function Login({setAuth,auth}) {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [isErrorFromServer, setisErrorFromServer] = useState(false)
    function login() {
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {email:emailRef.current.value, password:passwordRef.current.value})
        .then(res=>{
            setAuth(res.data)
        })
        .catch(err=>{
            setisErrorFromServer(err)
            console.log(err);
        })
    }
    if (auth != null) {
        return <Redirect to="/Authenticated"/>
      }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                login()
            }}>
                <input ref={emailRef} type="email" placeholder='Email'/><br/>
                <input ref={passwordRef} type="password" placeholder='password'/><br/>
                <button type="submit">Login</button>
            </form>
            {isErrorFromServer ? <p style={{color:"red"}}>ERROR</p> : ""}
        </div>
    )
}
