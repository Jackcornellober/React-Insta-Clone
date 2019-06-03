import React from 'react';
import Comment from '../Comment'

const CommentSection = (props) => {
    return (
        <div>{props.comments.map(comment => <Comment data = {comment}/>)}</div>
    )
}

export default CommentSection;