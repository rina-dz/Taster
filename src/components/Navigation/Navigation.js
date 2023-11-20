import './Navigation.css';
import React from 'react';

function Navigation() {

    return (
        <ul className="navigation">
            <a className='link' href="#contact">
                <li className="navigation__container navigation__contact">Contact</li>
            </a>
            <a className='link' href="#stats">
                <li className="navigation__container navigation__brands">Our brands</li>
            </a>
            <a className='link' href="#about-us">
                <li className="navigation__container navigation__about-us">Who we are</li>
            </a>
        </ul>
    );
}

export default Navigation;
