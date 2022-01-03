import React from 'react'

export default function Home({setAuth,auth}) {
    return (
        <div>
           <h1>Wellcom Home</h1> 
           {auth ? <h2>{auth.email}</h2> : "" } 
           {auth ? <h4>Glad u log in</h4> : "" }
           <button onClick={()=>setAuth(null)}>Log Out</button>
        </div>
    )
}
