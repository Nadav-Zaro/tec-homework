import { Component } from 'react'

export default class Jsonplaceholder_edit extends Component {
    state={posts:[],i:0,postToUpdate:{},title:"",body:""}
    componentDidMount(){
        this.getPosts()
    }
    getPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
        .then(data=>this.setState({posts:data}))
        .catch(err=>console.log(err))
    }
    render() {
        const {posts,postToUpdate,title,body} = this.state;
        const allPosts = posts.map(post=>(
                <tr key={post.id}>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td onClick={()=>{
                        let newPosts = posts.filter(it=>it.id !== post.id)
                        this.setState({posts:newPosts})
                    }}>&#10008;</td>
                    <td onClick={()=>this.setState({postToUpdate:post})}>&#10000;</td>
                </tr>
        ));
        return (
            <div>
                title<input type="text" defaultValue={postToUpdate.title} onChange={e=>this.setState({title:e.target.value})}/><br/>
                body<input type="text" defaultValue={postToUpdate.body} onChange={e=>this.setState({body:e.target.value})}/><br/>
                <button onClick={()=>{
                    let newUpdate = posts.find(it=>it.id === postToUpdate.id)
                    newUpdate.title = title
                    newUpdate.body = body
                    this.setState({posts})
                }}>update</button>
                <table>
                    <tbody>
                        <tr>
                            <th>user id</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                            <th>delete</th>
                            <th>update</th>
                        </tr>
                        {allPosts}
                    </tbody>
                </table>
            </div>
        )
    }
}
