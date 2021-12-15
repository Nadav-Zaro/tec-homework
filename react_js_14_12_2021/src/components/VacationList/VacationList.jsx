import {useState} from 'react'

export default function VacationList() {
  const [Input, setInput] = useState("")
  const [Options, setOptions] = useState("")
  const [Vactions, setVactions] = useState([
      {place:"Ethiopia",isComplete:false},
      {place:"Berlin",isComplete:true}
    ]);
  const allVacations =()=>{
    setOptions(Vactions.map((it,i)=>(
         <p key={i} style={{textDecoration:Vactions[i].isComplete? "line-through": "" }} onClick={()=>{
             let temp = [...Vactions]
             temp[i].isComplete = true
             setVactions(temp)
         }}>{i}. {it.place}</p> 
  )))
  } 
  const notComletedVacations =()=>{
    setOptions(Vactions.map((it,i)=>{
        if (!Vactions[i].isComplete) {
           return (
         <p key={i} style={{textDecoration:Vactions[i].isComplete? "line-through": "" }} onClick={()=>{
             let temp = [...Vactions]
             temp[i].isComplete = true
             setVactions(temp)
         }}>{i}. {it.place}</p> 
  )
        }}))
  } 
  const comletedVacations =()=>{
    setOptions(Vactions.map((it,i)=>{
        if (Vactions[i].isComplete) {
           return (
         <p key={i} style={{textDecoration:Vactions[i].isComplete? "line-through": "" }} onClick={()=>{
             let temp = [...Vactions]
             temp[i].isComplete = true
             setVactions(temp)
         }}>{i}. {it.place}</p> 
)
        }}))
  } 

  return (
        <div>
            <h1>Vacation Wish List</h1>
            <input type="text" onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>{
                let temp = [...Vactions]
                temp.push({place:Input,isComplete:false})
                setVactions(temp)
            }}>Add Vacation</button><br/>
            {Options}
            <br/>
            <button onClick={allVacations}>All</button>
            <button onClick={notComletedVacations}>Active</button>
            <button onClick={comletedVacations}>Completed</button>
        </div>
    )
}
