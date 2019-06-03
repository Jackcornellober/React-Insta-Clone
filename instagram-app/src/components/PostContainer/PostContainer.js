import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
    return (
        <div className = 'postContainer'>
            <container className = 'thumbName'>{<img className = 'thumbnail' src = {props.data.thumbnailUrl}/>}<span>{props.data.username}</span></container>
            <br></br>{<img className = 'postPhoto' src = {props.data.imageUrl}/>}
            <span className = 'likesCounter'>{props.data.likes} likes</span>
            <CommentSection comments = {props.data.comments}/>
        </div>
    )
}

export default PostContainer;