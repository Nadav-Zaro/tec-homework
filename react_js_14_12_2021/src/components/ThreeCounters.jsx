import {useState} from 'react'

export default function ThreeCounters() {
    const [Counter1, setCounter1] = useState(0)
    const [Counter2, setCounter2] = useState(0)
    const [Counter3, setCounter3] = useState(0)
    return (
        <div>
            <div>
            <button onClick={()=>setCounter1(Counter1 + 1)}>Counter1</button>
            <button onClick={()=>setCounter2(Counter2 + 1)}>Counter2</button>
            <button onClick={()=>setCounter3(Counter3 + 1)}>Counter2</button>
            </div><br/>
            <h2>Counter1: {Counter1}</h2>
            <h2>Counter2: {Counter2}</h2>
            <h2>Counter3: {Counter3}</h2>
        </div>
    )
}
