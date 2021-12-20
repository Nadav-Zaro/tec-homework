import './App.css';
import {useState} from 'react'
import ShowClicks from './components/ShowClicks';
import ShowClicksClass from './components/ShowClicksClass';
import ShowClicksHooks from './components/ShowClicksHooks';
import Counter from './components/Counter';
import TitleDate from './components/TitleDate';

function App() {
  const [countStr, setCountStr] = useState(null)
  return (
    <div className="App">
      <input type="number" onChange={(e)=>setCountStr(e.target.value)}/>
    {/* <ShowClicks /> */}
    {/* <ShowClicksClass/> */}
    {/* <ShowClicksHooks/> */}
    {/* <Counter countStr={countStr}/>  */}
    <TitleDate/>
    </div>
  );
}

export default App;
