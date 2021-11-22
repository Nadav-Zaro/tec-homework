
import './App.css';
import  {Counter, LongText, SetCounter, ShowHide, TwoCounters } from './AllComponent';

function App() {
  return (
    <div className="App">
      <Counter/>
      <SetCounter counter={7}/>
      <TwoCounters/>
      <LongText text="this is my text"/>
      <LongText text="thi"/>
      <ShowHide text="this is my text"/>
    </div>
  );
}

export default App;
