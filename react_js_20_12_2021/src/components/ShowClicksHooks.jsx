import {useEffect,useState} from 'react'

export default function ShowClicksHooks() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
    })
    return (
        <div style={{height:"100vh",width:"100%"}}
        onClick={()=>setCount(count + 1)}>
            <p>count: {count}</p>
        </div>
    )
}
