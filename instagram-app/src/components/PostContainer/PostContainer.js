import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import icon2 from '../SearchBar/img/icon2.png'
import icon25 from '../SearchBar/img/icon25.png'
import icon4 from '../SearchBar/img/icon4.png'
import styled from 'styled-components'

const PostDiv = styled.div`
border: 1px solid lightgrey;
margin-left: .8rem;
max-width: 21.5rem;
margin-bottom: 3rem;
background: white;
`

const Icon = styled.img`
width: 12px;
height: 12px;
margin-right: 1rem;
`

const IconSmall = styled.img`
width: 10px;
height: 10px;
margin-right: 1rem;
`

class PostContainer extends React.Component {
    
    state = {
        likes: this.props.data.likes,
        color: 'white',
        heartSource: icon2,
        display: 'none',
    }

    

    addLike = () => {
            if(this.state.likes === this.props.data.likes) {
                this.setState({
                likes: this.state.likes + 1,
                color: 'pink',
                heartSource: icon25,
                })
            } else {
                this.setState({
                likes: this.state.likes - 1,
                color: 'white',
                heartSource: icon2,
            })
            }

    }

    render() {
        return (
            <PostDiv>
                <div className = 'thumbName'>{<img className = 'thumbnail' src = {this.props.data.thumbnailUrl}/>}<span className = 'userName'>{this.props.data.username}</span></div>
                {<img className = 'postPhoto' src = {this.props.data.imageUrl}/>}
                <div className = 'pictureIcons'><Icon onClick = {this.addLike} color = {this.state.color} src = {this.state.heartSource} /><IconSmall src = {icon4} /></div>
                <span className = 'likesCounter'>{this.state.likes} likes</span>
                <CommentSection comments = {this.props.data.comments}/>
            </PostDiv>

        )
    }
}

export default PostContainer;