import { useState , useEffect} from "react";

function useFetch(url){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(getData, [])

    function getData(){
    fetch(url).then(res=>res.json())
    .then(data=>{setData(data);setIsLoading(false)})
    .catch(err=>setError(err))
    }
    
    return {data,isLoading,error}
}

export default useFetch