import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CommentSection from '../CommentSection/CommentSection';
import PostContainer from './PostContainer';
import '../PostContainer/PostContainer.css'
import dummyData from '../../dummy-data'

class PostsPage extends React.Component {
    
    state = {
      stateData: this.props.dummyData
    }
  
    searchFunction = (searchValue) => {
      this.setState ({
        stateData: this.props.dummyData.filter(post => post.username.includes(searchValue))
    })
    }

  
    render() {
      console.log('rendering!');
      return (
        <div>
          <SearchBar searchFunction = {this.searchFunction} /><button onClick = {this.props.logout}>Log Out</button>
          {this.state.stateData.map(x => <PostContainer key = {x.id} data = {x}/>)}
        </div>
      );
    }
  }
  
  export default PostsPage;