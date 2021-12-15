import './App.css';
import Name from './components/Name';
import Register from './components/Register';
import ThreeCounters from './components/ThreeCounters';
import VacationList from './components/VacationList';
import YourName from './components/YourName';

function App() {
  return (
    <div className="App">
      {/* <YourName/>
      <Name name={"Haim Arka"}/>
      <ThreeCounters/>
      <Register/> */}
      <VacationList/>
    </div>
  );
}

export default App;
