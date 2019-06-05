import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import icon2 from '../SearchBar/img/icon2.png'
import icon4 from '../SearchBar/img/icon4.png'

const PostContainer = (props) => {
    return (
        <div className = 'postContainer'>
            <div className = 'thumbName'>{<img className = 'thumbnail' src = {props.data.thumbnailUrl}/>}<span className = 'userName'>{props.data.username}</span></div>
            {<img className = 'postPhoto' src = {props.data.imageUrl}/>}
            <div className = 'pictureIcons'><img className = 'icon' src = {icon2} /><img className = 'icon icon4' src = {icon4} /></div>
            <span className = 'likesCounter'>{props.data.likes} likes</span>
            <CommentSection comments = {props.data.comments}/>
        </div>
    )
}

export default PostContainer;