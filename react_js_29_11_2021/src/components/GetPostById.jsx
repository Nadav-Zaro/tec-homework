import { Component } from 'react'

export default class GetPostById extends Component {
    state={post:{}}
    componentDidUpdate(prevProps){
        if (this.props.id !== prevProps.id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then(res=>res.json())
            .then(data=>this.setState({post:data}))
            .catch(err=>console.log(err))
        }
    }
    render() {
        const {post} = this.state
        return (
            <div>
                <p>userid: {post.userId}, id:{post.id}, title:{post.title}</p>
            </div>
        )
    }
}
