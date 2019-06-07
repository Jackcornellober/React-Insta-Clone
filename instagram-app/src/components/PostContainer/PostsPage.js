import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CommentSection from '../CommentSection/CommentSection';
import PostContainer from './PostContainer';
import '../PostContainer/PostContainer.css'
import dummyData from '../../dummy-data'
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const PageContainer = styled.div`
background: #fafafa;
display: flex;
flex-direction: column;
align-items: center;
`

const searchStyle = {
  marginBottom: '10rem'
}

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
        <PageContainer>
          <SearchBar style = {searchStyle} logout = {this.props.logout} searchFunction = {this.searchFunction} />
          {this.state.stateData.map(x => <PostContainer key = {x.id} data = {x}/>)}
        </PageContainer>
      );
    }
  }
  
  export default PostsPage;