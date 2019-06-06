import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import icon2 from '../SearchBar/img/icon2.png'
import icon25 from '../SearchBar/img/icon25.png'
import icon4 from '../SearchBar/img/icon4.png'

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
            <div className = 'postContainer' background = 'red'>
                <div className = 'thumbName'>{<img className = 'thumbnail' src = {this.props.data.thumbnailUrl}/>}<span className = 'userName'>{this.props.data.username}</span></div>
                {<img className = 'postPhoto' src = {this.props.data.imageUrl}/>}
                <div className = 'pictureIcons'><img onClick = {this.addLike} color = {this.state.color} className = 'icon' src = {this.state.heartSource} /><img className = 'icon icon4' src = {icon4} /></div>
                <span className = 'likesCounter'>{this.state.likes} likes</span>
                <CommentSection comments = {this.props.data.comments}/>
            </div>

        )
    }
}

export default PostContainer;