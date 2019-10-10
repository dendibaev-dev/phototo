import React from 'react'

import './image-view.css'
import sizesIcon from './images/sizes.svg'
import viewsIcon from './images/views.svg'
import downloadsIcon from './images/downloads.svg'

const ImageView = props => {
    if (props.modalIsOpen === false) return null
    
    const {item} = props

    return (
        <div className="image-view-wrapper">
            <div className="image-view">
                <div className="image-view__img">
                    <img src={item.largeImageURL} alt=""/>
                </div>
                <div className="image-view__info">
                    <div className="close-modal">
                        <button onClick={props.closeModal}>Close</button>
                    </div>
                    <div className="image-view__author-wrapper">
                        <img src={item.userImageURL} className="image-view__author-img" width="54" alt="" />
                        <div className="image-view__author">
                            <a href={`https://pixabay.com/ru/users/${item.user_id}/`}>{item.user}</a>
                            Пользователь Pixabay
                        </div>
                    </div>
                    <div className="image-view__parametrs">
                        <span title={`Размер изображения`}><img src={sizesIcon} width="12" alt=""/>{`${item.imageWidth}x${item.imageHeight}`}</span>
                        <span title={`Посмотрели`}><img src={viewsIcon} width="12" alt=""/>{item.views}</span>
                        <span title={`Скачали`}><img src={downloadsIcon} width="12" alt=""/>{item.downloads}</span>
                    </div>
                    <a href="/#" className="image-view__download" download={item.largeImageURL}>Скачать Изображание</a>
                </div>
            </div>
        </div>
    )
}

export default ImageView