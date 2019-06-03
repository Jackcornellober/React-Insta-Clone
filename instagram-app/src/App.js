import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import '../src/components/PostContainer/PostContainer.css'



function App() {
  return (
    <div>
      <SearchBar/>
      {dummyData.map(x => <PostContainer key = {x.id} data = {x}/>)}
    </div>
  );
}

export default App;
