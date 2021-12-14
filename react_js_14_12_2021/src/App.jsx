import './App.css';
import Name from './components/Name';
import Register from './components/Register';
import ThreeCounters from './components/ThreeCounters';
import YourName from './components/YourName';

function App() {
  return (
    <div className="App">
      <YourName/>
      <Name name={"Haim Arka"}/>
      <ThreeCounters/>
      <Register/>
    </div>
  );
}

export default App;
