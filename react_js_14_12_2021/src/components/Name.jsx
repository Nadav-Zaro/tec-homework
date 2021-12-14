import {useState} from 'react'

export default function Name({name}) {
    const [clicked, setClicked] = useState(name)
    const style = {color: clicked ? "green" : "red"}
    return (
        <div>
            <h1 style={style} onClick={()=>setClicked(!clicked)} >{name}</h1>
        </div>
    )
}
