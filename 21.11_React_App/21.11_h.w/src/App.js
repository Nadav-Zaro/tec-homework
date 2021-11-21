import React from 'react';
import './App.css';
// import NameAndAge from './components/components';
import {NameAndAge,Employe,BlueDiv,Title,Worker,Header,Footer,Main} from './components/components';

class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return <div style={{display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(to right,rgba(0, 0, 0, 0.322),rgba(255, 255, 255, 0.329),rgba(0, 0, 0, 0.322))"}}>
    <Header title="Zaro's & Design" logo="https://i.ibb.co/3C7y7BB/Black-logo-no-background.png"/>
      <NameAndAge name="nadav" age={29}/>
      <Main img="https://cdn.pixabay.com/photo/2015/03/07/23/54/hand-663726_1280.jpg" video="https://player.vimeo.com/external/587646749.hd.mp4?s=cd8928bab78792f5dd05e680e2cc94b20b6e2f9d&profile_id=174"/>
      <div style={{width:"60%",display:"flex",justifyContent:"space-around",marginTop:"3%"}}>
      <Employe name="nadav" img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"/>
      <Employe name="uri" img="https://cdn.pixabay.com/photo/2017/05/11/08/48/woman-2303361_1280.jpg"/>
      <Employe name="haim" img="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg"/>
      </div>
      <BlueDiv/>
    <Title/>
    <div style={{display:"flex",padding:"5px",width:"80%",justifyContent:"space-around"}}>
    <Worker img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" name="nadav" age={29} job="Manager"/>
    <Worker img="https://cdn.pixabay.com/photo/2017/05/11/08/48/woman-2303361_1280.jpg" name="uri" age={33} job="co-manager"/>
    <Worker img="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg" name="haim" age={29} job="coco-manager"/>
    </div>
    <Footer/>
    </div>
  }
}


export default App;
