import {useState} from 'react'

export default function Register() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState(0)
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log({Name,Email,Password});
            }}>
                Name: <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
                Email: <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                Password: <input type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
