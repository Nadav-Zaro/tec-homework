import { Component } from 'react'

export default class ShowClicksClass extends Component {
    state={count:0}

    componentDidMount(){
        document.title = this.state.count
    }

    componentDidUpdate(){
        document.title = this.state.count
    }
    render() {
        return (
            <div style={{height:"100vh",width:"100%"}}
            onClick={()=>this.setState({count:this.state.count + 1})}>
                <p>count: {this.state.count}</p>
            </div>
        )
    }
}
