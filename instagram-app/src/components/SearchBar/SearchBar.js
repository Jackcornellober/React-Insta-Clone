import React from 'react';
import icon0 from './img/icon0.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'

const SearchBar = () => {
    return (
        <div className = 'searchBar'>
            <img className = 'icon' src = {icon0} /> <span className = 'instagram'>
            Instagram</span>
            <input className = 'searchBox' placeholder = 'search'></input>
            <img className = 'icon icon1' src = {icon1} />
            <img className = 'icon' src = {icon2} />
            <img className = 'icon' src = {icon3} />
        </div>
    )
}


export default SearchBar;