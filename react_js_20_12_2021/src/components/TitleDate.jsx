import {useEffect} from 'react'
import moment from 'moment';

export default function TitleDate() {
    let handle = null
    useEffect(() => {
        handle = setInterval(() => {
            return document.title = moment().format("DD/MM/YYYY  HH:m:ss") 
        }, 1000);
        return ()=>clearInterval(handle)
       }, [])

    return (
        <div>
            
        </div>
    )
}
