import { userContext } from "../context/UserContext.js"
import Level2 from "./Level2"

export default function Level1() {
    const user = {name:"bari" ,email:"bari@gamil.com",adress:"jerusalem"}
    return (
        <div>
            <h2 style={{border:"2px solid blue"}}>Level 1</h2>
            <userContext.Provider value={user}>
            <Level2/>
            </userContext.Provider>
        </div>
    )
}
