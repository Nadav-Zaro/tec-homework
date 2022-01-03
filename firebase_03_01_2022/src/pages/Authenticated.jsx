import React from 'react'

export default function Authenticated({auth,setAuth}) {
    return (
        <div>
            <h1>Hello {auth.email}</h1>
           <button onClick={()=>setAuth(null)}>Log Out</button>
           <h2>Here is your prifile</h2>
            <ul>
                <li>Email: {auth.email}</li>
                <li>kind: {auth.kind}</li>
                <li>displayName: {auth.displayName}</li>
                <li>idToken: {auth.idToken}</li>
                <li>localId: {auth.localId}</li>
                <li>registered: {auth.registered}</li>
            </ul>
        </div>
    )
}
