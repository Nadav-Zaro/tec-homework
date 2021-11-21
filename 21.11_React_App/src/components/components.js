import React from "react";
import style from './style.css'

class NameAndAge extends React.Component{
    constructor(){
        super()
    }
    render(props){
        return <div><h1>Name:{this.props.name}, Age:{Number(this.props.age)}</h1></div>
    }
}
class Employe extends React.Component{
    constructor(){
        super()
    }
    render(props){
        return <div style={{border:"1.2px solid black",padding:"6px",borderRadius:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"250px",height:"250px",boxShadow:"1px 1px 1.5px green"}}>
            <h3>Name: {this.props.name}</h3>
            <img style={{borderRadius:"50%",width:"60%",height:"60%",border:"1px solid black"}} src={this.props.img}></img>
            </div>
    }
}
class BlueDiv extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="blue-square"></div>
    }
}
class Title extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <h1 style={{color:"red"}}><b>this is my title</b></h1>
    }
}
class Worker extends React.Component{
    constructor(){
        super()
    }
    render(props){
        return <div style={{border:"1.5px inset black",display:"flex",flexWrap:"wrap",borderRadius:"8px",padding:"5px",width:"300px",height:"350px"}}>
            <img src={this.props.img} style={{width:"100%",height:"50%"}}></img>
            <p style={{width:"100%",fontWeight:"bold"}}>Name: {this.props.name}</p>
            <p style={{width:"100%",fontWeight:"bold"}}>Age: {this.props.age}</p>
            <p style={{width:"100%",fontWeight:"bold"}}>Job: {this.props.job}</p>
        </div>
    }
}
class Header extends React.Component{
    constructor(){
        super()
    }
    render(props){
        return <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <h1>{this.props.title}</h1>
            <img src={this.props.logo} style={{width:"20%",height:"40%"}}></img>
            </div>
    }
}
class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div style={{width:"100%",textAlign:"center"}}>
            <p style={{borderTop:"1px solid black"}}>footer @copyrights belongs to ME </p>
            <h3>Contact Us</h3>
            <form style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <label>Name:</label>
                <input type="text"></input>
                <label>Last Name:</label>
                <input type="text"></input>
                <label>Email:</label>
                <input type="email"></input>
                <label>Message:</label>
                <input type="text"></input>
                <button>Send</button>
            </form>
        </div>
    }
}
class Main extends React.Component{
    constructor(){
        super()
    }
    render(props){
        return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima repellat atque voluptatibus eum sapiente aliquam at autem debitis, dolor asperiores ducimus velit esse itaque pariatur cupiditate et placeat maiores.</p>
        <img src={this.props.img} style={{width:"50%",height:"50%",borderRadius:"50%"}}></img>
        <video src={this.props.video} controls style={{width:"80%"}}></video>
        </div>
    }
}
// export default NameAndAge 
export {NameAndAge,Employe,BlueDiv,Title,Worker,Header,Footer,Main}