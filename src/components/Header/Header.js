import React from 'react';
import "./Header.css";
import logo from '../../images/header__logo.svg';
import appStore from '../../images/header__app-store.svg';
import googlePlay from '../../images/header__google-play.svg';

function Header() {


    return (
        <header className="header">
            <img className='header__logo' src={logo} alt='логотип' />
            <div className='header__stores-container'>
                <a href='https://www.apple.com/app-store/' target="_blank" rel="noreferrer">
                    <img className='header__store' src={appStore} alt='Приложение в appStore' />
                </a>
                <a href='https://play.google.com/store/' target="_blank" rel="noreferrer">
                    <img className='header__store' src={googlePlay} alt='Приложение в googlePlay' />
                </a>
            </div>
            <ul className='header__langs-container'>
                <li className='header__lang'>EN</li>
                <li className='header__lang'>ES</li>
                <li className='header__lang'>FR</li>
            </ul>
        </header>
    )
}


export default Header;