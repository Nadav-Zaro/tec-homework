import {useState,useEffect} from 'react'

export default function Unmount() {
    const [state, setstate] = useState(false)
    useEffect(() => {
            console.log("unmount");
            setstate(true)
        return () => {
                console.log("unmount");
                setstate(false)
        }
    }, [state])
    const text = "use Effect"
    return (
        <div>
            {text}
        </div>
    )
}
