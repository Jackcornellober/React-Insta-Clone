import React from 'react'
import styled from 'styled-components'

class Login extends React.Component {
    
    state = {
        userNameText: '',
        passwordText: '',
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    login = event => {
        this.props.login(this.state.userNameText,this.state.passwordText);
    }

    render() {
        return (
           <form onSubmit = {this.login}>
               <input value = {this.state.userNameText} onChange = {this.handleChanges} name = 'userNameText'  ></input>
               <input ></input>
               <button>Log In</button>
           </form> 
        )
    }
}

export default Login