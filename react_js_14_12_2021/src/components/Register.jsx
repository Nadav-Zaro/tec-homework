import {useState} from 'react'

export default function Register() {
    const [{Name,Email,Password}, setUser] = useState({Name:"",Email:"",Password:0})
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log({Name,Email,Password});
            }}>
                Name: <input type="text" onChange={(e)=>setUser({Name:e.target.value,Email,Password})}/><br/>
                Email: <input type="email" onChange={(e)=>setUser({Name,Email:e.target.value,Password})}/><br/>
                Password: <input type="password" onChange={(e)=>setUser({Name,Email,Password:e.target.value})}/><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
