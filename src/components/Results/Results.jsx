import React, { Component } from 'react'

import './results.css'
import ImageView from '../ImageView/ImageView'

class Results extends Component {
    state = {
        modalIsOpen: false,
        item: {}
    }

    openModal = item => {
        this.setState({modalIsOpen: true, item});
    }

    closeModal = () => {
        console.log('closed')
        this.setState({modalIsOpen: false});
    }

    render() {
        const {images} = this.props

        return (
            <div className="results">
                { images.length > 1 ? <span className="results__text">{ images.length } Изображений найденно</span> : null}
                <div className="results__items-wrapper">
                {
                    images.map(item => {
                        return (
                            <div className="results__item" onClick={() => this.openModal(item)} key={item.id}>
                                <img src={item.largeImageURL} className="item__img" alt=""/>
                            </div>
                        )
                    })
                }
                </div>
                <ImageView item={this.state.item} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
            </div>
        )
    }
}

export default Results