import React from 'react';
import icon0 from './img/icon0.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'



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
            <div className = 'searchBar'>
                <form className = 'searchForm' onSubmit = {this.searchFunction}>
                <img className = 'icon' src = {icon0} /> <span className = 'instagram'>
                Instagram</span>
                <input name = 'text' className = 'searchBox' onChange = {this.handleChanges} value = {this.state.text} placeholder = 'search'></input>
                <img className = 'icon icon1' src = {icon1} />
                <img className = 'icon' src = {icon2} />
                <img className = 'icon' src = {icon3} />
                </form>
            </div>
        )
    }
}


export default SearchBar;