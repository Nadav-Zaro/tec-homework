import {useState} from 'react'

export default function YourName() {
    const [clicked, setClicked] = useState(true)
    const style = {color: clicked ? "green" : "red"}
    return (
        <div>
            <h1 style={style} onClick={()=>setClicked(!clicked)} >Nadav zaro</h1>
        </div>
    )
}
