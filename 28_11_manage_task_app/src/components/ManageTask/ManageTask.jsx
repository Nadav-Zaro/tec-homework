import  { Component } from 'react'

export default class ManageTask extends Component {
    state = {
        id: 0,
        title:"",
        isComplete: true
};
    userTitle = e => this.setState({title:e.target.value})
    missionComplete = e => this.setState({isComplete:e.target.value === 'false'? false : true})
    tasks = [];
    submit = (e)=>{
        let {id,title,isComplete} = this.state;
        e.preventDefault()
        this.tasks.push({id:id,title:title,isComplete:isComplete})
        this.setState({id:id + 1}) 
        console.log(this.tasks);
    }
    unCompleted=()=>{
            console.log(this.tasks);
            {this.tasks.map((task,i)=>{
                return (<div key={task.id}>
                        <p>{task.id}</p>
                        <p>{task.title}</p>
                        <p>{task.isComplete}</p>
                    </div>
                )
            })}
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" onChange={this.userTitle}/>
                    <select onChange={this.missionComplete}>
                        <option>true</option>
                        <option>false</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
                <button type="button" onClick={()=>{
                   {this.tasks.map((task,i)=>{
                       if (task.isComplete === false) {
                       console.log(task);
                       return (
                           <div key={task.id}>
                            <p>{task.id}</p>
                            <p>{task.title}</p>
                            <p>{task.isComplete}</p>
                        </div>
                           )
                       }
                   })
                }}}>Get Tasks</button>
            </div>
        )
    }
}
