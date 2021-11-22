import { Component } from "react";

class Counter extends Component{
    state = {count:0}
    increase = ()=>{
        this.setState({count:this.state.count + 1 })
    }
    render(){
        return <div>
            <button onClick={this.increase}>click to increase Counter</button>
            <p>Counter is: {this.state.count}</p>
        </div>
    }
}

class SetCounter extends Component{
    state = {count:this.props.counter}
    increase = ()=>{
        this.setState({count:this.state.count + 1 })
    }
    render(){
        return <div>
            <button onClick={this.increase}>click to increase Counter</button>
            <p>Counter is: {this.state.count}</p>
        </div>
    }
}

const TwoCounters = ()=>{
    return <div>
        <Counter/>
        <Counter/>
    </div>
}

class LongText extends Component{
    render(props){
        let style = {color:"black"}
        if (this.props.text.length < 5) {
            style = {color:"green"}
        }
        else{style = {color:"red"}}
        return <div>
            <p style={style}>{this.props.text}</p>
        </div>
    }
}

class ShowHide extends Component{
    state={display:"block"}
    Click = ()=>this.setState({display:this.state.display === "block"? "none" : "block"})
    render(props){
        let style = {display:this.state.display}
        return <div>
            <p style={style}>{this.props.text}</p>
            <button onClick={this.Click}>click to see a trick</button>
        </div>
    }
}

export  {Counter,SetCounter,TwoCounters,LongText,ShowHide}