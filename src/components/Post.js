import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Repeat, VerifiedUser , Publish } from '@material-ui/icons'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_pbNk0OVg4dPoSNTFdzRyG2TPF2Jl7THL7EscNrP0E0xcVfppu5V8dQExge-FhzPLuU&usqp=CAU" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}
                            <span className="post__headerSpecial">
                                <VerifiedUser className="post__badge" />
                                <p>{username}</p>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <h5>{text}</h5>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
