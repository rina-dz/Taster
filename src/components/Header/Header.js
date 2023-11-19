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
                <img className='header__store' src={appStore} alt='Приложение в appStore'/>
                <img className='header__store' src={googlePlay} alt='Приложение в googlePlay'/>
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