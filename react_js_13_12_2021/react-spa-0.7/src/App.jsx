import React from 'react';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Person from './pages/Person';
import AddPerson from './pages/AddPerson';
import {BrowserRouter , Switch , Route , Link} from 'react-router-dom'


class App extends React.Component{
  persons = [
    {name:"nadav",age:29,biography:"i live in kiryat-gat"},
    {name:"bari",age:30,biography:"i live in jerusalem"}
  ]
  person
  getDetails=(details)=>{
    this.person = details
    console.log(this.persons);
  }
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Link to="/">Home</Link>
    <Link to="/Person">Person</Link>
    <Switch>
    <Route exact path="/" component={Home}/> 
    <Route exact path="/Person" render={()=><Person persons={this.persons} getDetails={this.getDetails}/>}/> 
    <Route exact path="/AddPerson" render={()=><AddPerson persons={this.persons}/>}/> 
    <Route exact path="/Details" render={()=><Details details={this.person}/>}/> 
    </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
