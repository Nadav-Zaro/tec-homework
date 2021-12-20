import {useEffect,useState} from 'react'

export default function Counter({countStr}) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(Number(countStr))
    }, [countStr])
    return (
        <div>
            <button onClick={()=>{
                setCounter(counter + 1)
            }}>Plus</button>
            <p>counter: {counter}</p>
        </div>
    )
}
