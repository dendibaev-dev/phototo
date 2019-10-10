import React from 'react'

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <a href="/" className="header__logo">
                    <img src="/images/logo.svg" className="header__logo-img" width="22" alt="" />
                    Phototo
                </a>
            </div>
            <div className="header__menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header