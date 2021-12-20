import React from 'react'

export default function ShowClicks() {
    let count = 0 
    return (
        <div style={{height:"100vh",width:"100%"}}
        onClick={()=>{
            count++
            document.title = count
        }}></div>
    )
}
