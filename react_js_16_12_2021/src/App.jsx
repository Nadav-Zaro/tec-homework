import './App.css';
import Reddit from './components.jsx/Reddit';
import { useState } from 'react';
import Unmount from './components.jsx/Unmount';

function App() {
  const [input, setInput] = useState("reactjs")
  return (
    <div className="App">
      <input type="text" onChange={(e)=>setInput(e.target.value)}/> 
      <Reddit subject={input}/>
      {/* <Unmount/> */}
    </div>
  );
}

export default App;
