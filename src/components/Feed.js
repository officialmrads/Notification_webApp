import React , {useState , useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase.js';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    } , [] );
    return (
        <div className="feed">

            <div className="feed__header">
                <h1> Home </h1>
            </div>

            <TweetBox />

            {posts.map(post => (

                <Post 
                displayName={post.displayName} 
                username={post.username} 
                text={post.text}
                image={post.image}
                 />

            ))}
        </div>
    )
}

export default Feed
