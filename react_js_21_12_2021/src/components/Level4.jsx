import {useContext} from 'react'
import { userContext } from '../context/UserContext.js'

export default function Level4() {
    const user = useContext(userContext)
    return (
        <div>
            <h2 style={{border:"2px solid blue"}}>Level 4</h2>
            <p>Name: {user.name} ,Email: {user.email} ,Adress: {user.adress}</p>
        </div>
    )
}
