import './App.css';
import Reddit from './components.jsx/Reddit';
import { useState } from 'react';
import Unmount from './components.jsx/Unmount';

function App() {
  // const [input, setInput] = useState("")
  return (
    <div className="App">
      {/* <form onSubmit={()=>{
        console.log(input);
      }}>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/> 
      <button type="submit">get</button>
      </form>
      <Reddit subject={input}/> */}
      <Unmount/>
    </div>
  );
}

export default App;
