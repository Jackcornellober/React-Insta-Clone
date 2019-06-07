import React from 'react';
import icon0 from './img/icon0.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import styled from 'styled-components'

const Button = styled.button`
padding: 4px 6px;
margin: 3px;
border: none;
border-radius: 3px;
color: white;
font-size: .5rem;

${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
${props => (props.type === 'success' ? `background: #4caf50;` : null)}
${props => (props.type === 'danger' ? `background: #f44336;` : null)}
${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`

const Icon = styled.img`
width: 12px;
height: 12px;
margin-right: 1rem;
`

const Icon1 = styled.img`
width: 12px;
height: 12px;
margin-right: 1rem;
margin-left: 5.5rem;
`

const SearchBarDiv = styled.div`
border-bottom: .5px solid lightgrey;
background: white;
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 1.5rem;
`

const Logo = styled.span`
padding-left: 1.3rem;
border-left: .5px solid black;
margin-left: 0;
font-size: .7rem;
`

class SearchBar extends React.Component {
    
    state = {
        text: ''
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    searchFunction = event => {
        event.preventDefault();
        this.props.searchFunction(this.state.text);
        this.setState({
            text: '',
        })
    }

    render() {
        return (
            <SearchBarDiv>
                <form className = 'searchForm' onSubmit = {this.searchFunction}>
                <Icon src = {icon0} /> 
                <Logo>Instagram</Logo>
                <input name = 'text' className = 'searchBox' onChange = {this.handleChanges} value = {this.state.text} placeholder = 'search'></input>
                <Icon1 src = {icon1} />
                <Icon  src = {icon2} />
                <Icon  src = {icon3} />
                </form>
                <Button type = 'primary' onClick = {this.props.logout}>Log Out</Button>
            </SearchBarDiv>
        )
    }
}


export default SearchBar;