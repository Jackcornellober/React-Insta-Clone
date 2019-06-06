import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import '../src/components/PostContainer/PostContainer.css'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from '../src/components/authentication/withAuthenticate'
import Login from './components/Login/LoginPage'


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends React.Component {
  state = {
    stateData: dummyData,
  }

  login = (userName, password) => {
    localStorage.setItem('username', userName);
  }

  logout = () => {
    localStorage.setItem('username', '')
    window.location.reload()
  }
  

  render() {
    console.log('rendering!');
    return (
      <div>
        <ComponentFromWithAuthenticate logout = {this.logout} login = {this.login} dummyData = {this.state.stateData}/>
      </div>
    );
  }
}

export default App;

  ////stuff that used to live here////

  // componentDidMount() {
  //   console.log('mounted!')
  //   this.setState({
  //     stateData: dummyData
  //   })
  // }

  // searchFunction = (searchValue) => {
  //   this.setState ({
  //     stateData: dummyData.filter(post => post.username.includes(searchValue))
  // })
  // }

/* <ComponentFromWithAuthenticate dummyData = {this.state.stateData}/> */