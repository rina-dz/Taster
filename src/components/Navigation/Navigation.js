import './Navigation.css';
import React from 'react';


function Navigation() {


    return (
        <ul className="navigation">
            <li className="navigation__container navigation__contact">Contact</li>
            <li className="navigation__container navigation__brands">Our brands</li>
            <li className="navigation__container navigation__about-us">Who we are</li>
        </ul>
    );
}

export default Navigation;
