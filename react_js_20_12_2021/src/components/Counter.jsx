import {useEffect,useState} from 'react'

export default function Counter({initialCounter}) {
    const [counter, setCounter] = useState(initialCounter)

    useEffect(() => {
        setCounter(initialCounter)
    }, [initialCounter])
    return (
        <div>
            <button onClick={()=>{
                setCounter(counter + 1)
            }}>Plus</button>
            <p>counter: {counter}</p>
        </div>
    )
}
