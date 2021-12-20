import {useEffect,useState} from 'react'

export default function Reddit({subject}) {
    const [posts, setPosts] = useState([])
    useEffect(getPosts, [subject])
    function getPosts(){
        fetch(`https://www.reddit.com/r/${subject}.json`).then(res=>res.json())
        .then(data=>setPosts(data.data.children))
        .catch(err=>console.log(err))
    }

    const postsElement = posts.map((it,i)=>(
        <div key={i}>{i}. title: {it.data.title}</div>
    ))
    console.log(posts);
    return (
        <div>
            {postsElement}
        </div>
    )
}
