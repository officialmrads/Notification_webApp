import React ,{useState} from 'react';
import './TweetBox.css';
import {Avatar , Button } from '@material-ui/core';
import db from '../firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage , setTweetImage ] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'LNCT',
            username: '@tnp_LNCT',
            text: tweetMessage,
            image : tweetImage

        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_pbNk0OVg4dPoSNTFdzRyG2TPF2Jl7THL7EscNrP0E0xcVfppu5V8dQExge-FhzPLuU&usqp=CAU"/>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="Write here"
                     type="text" ></input>
                    
                    
                </div>

                <input 
                
                value={tweetImage}
                onChange={ (e)=> setTweetImage(e.target.value)}
                className="tweetBox__inputImage" 
                placeholder="place image url" 
                type="text" ></input>



                <Button onClick={sendTweet} className="tweetBox__tweetButton">Post</Button>

            </form>
            
        </div>
    )
}

export default TweetBox
