import React from 'react';
import Comment from './Comment'
import CommentBox from './CommentBox'

class CommentSection extends React.Component {
    state = {
        comments: [],
    }
    
    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }
    
    addNewComment = (newValue) => {
        this.setState ({
            comments: [...this.state.comments, {id: Date.now(), username: 'NuckChorris', text: newValue}]
        })
    }

    render() {
        return (
            <div>
            {this.state.comments.map(comment => <Comment key = {comment.id} data = {comment}/>)}
            <CommentBox addNewComment = {this.addNewComment}/>
            </div>
        )
    }
}

export default CommentSection;