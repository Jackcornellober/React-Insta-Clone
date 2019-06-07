import React from 'react'
import styled from 'styled-components'

class CommentBox extends React.Component{
    state = {
        text: ''
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewComment = event => {
        event.preventDefault();
        this.props.addNewComment(this.state.text);
        this.setState({
            text: '',
        })
    }
    
    render() {
        return(
            <form onSubmit = {this.addNewComment}>
                <input name = 'text' onChange = {this.handleChanges} value = {this.state.text} className = 'commentBox' placeholder = 'Add a comment...'></input>
            </form>
        )
    }
}

export default CommentBox;