import React, { Component } from 'react'

import './app.css'

import Header from '../Header/Header'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Footer from '../Footer/Footer'

class App extends Component {
    state = {
        apiKey: '8876389-10df051091e459afa3e71c7c8',
        images: []
    }

    gettingImages = async e => {
        e.preventDefault()

        const text = e.target.elements.text.value
        const res = await fetch(`https://pixabay.com/api/?key=${this.state.apiKey}&q=${text}&image_type=photo&pretty=true&per_page=36`)
        const data = await res.json()

        this.setState({
            images: data.hits
        })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Search gettingImages={this.gettingImages} />
                <Results images={this.state.images} />
                <Footer />
            </div>
        )
    }
}

export default App