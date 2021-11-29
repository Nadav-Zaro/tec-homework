import React from 'react';
import './App.css';
import GetPostById from './GetPostById';
import Jsonplaceholder_edit from './Jsonplaceholder_edit';

class App extends React.Component {
  state={id:this.valueNumber}
  render(){
  return (
    <div className="App">
      <Jsonplaceholder_edit/>
      <input type="text" defaultValue={this.defaultNumber} onChange={e=>this.setState({id:e.target.value})}/>
      <GetPostById id={this.state.id}/>
    </div>
  )
  }
}

export default App;
