import React from 'react';

const Comment = (props) => {
    return (
        <div className = 'comment'>
            <span className = 'commentName'>{props.data.username}:</span>  {props.data.text}
        </div>
    )
}

export default Comment;