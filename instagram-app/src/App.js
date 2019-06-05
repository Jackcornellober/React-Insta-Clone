import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import '../src/components/PostContainer/PostContainer.css'



class App extends React.Component {
  state = {
    stateData: [],
  }

  componentDidMount() {
    console.log('mounted!')
    this.setState({
      stateData: dummyData
    })
  }

  searchFunction = (searchValue) => {
    this.setState ({
      stateData: dummyData.filter(post => post.username.includes(searchValue))
  })
  }

  render() {
    console.log('rendering!');
    return (
      <div>
        <SearchBar searchFunction = {this.searchFunction}/>
        {this.state.stateData.map(x => <PostContainer key = {x.id} data = {x}/>)}
      </div>
    );
  }
}

export default App;
