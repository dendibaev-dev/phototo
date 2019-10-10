import React, { Component } from 'react'

import './search.css'
import searchIcon from './images/search.svg'

class Search extends Component {
    render() {
        const {gettingImages} = this.props

        return (
            <div className="search">
                <h1 className="search__text">Поиск стоковых изображений</h1>
                <form onSubmit={gettingImages} className="search__form">
                    <input type="text" name="text" className="search__form-input" placeholder="Найти изображение..." autoFocus={true} />
                    <button className="search__form-button">
                        <img src={searchIcon} width="26" alt=""/>
                    </button>
                </form>
            </div>
        )
    }
}

export default Search