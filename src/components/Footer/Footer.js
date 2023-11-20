import React from 'react';
import "./Footer.css";

function Footer() {

    const url1 = 'https://manna-board.ru/storage/files/ru/12611/04a026d3729aa0e4b667f514cae2650c.jpg';
    const url2 = "https://fikiwiki.com/uploads/posts/2022-02/1645042296_3-fikiwiki-com-p-kartinki-ishchu-rabotu-4.jpg";

    return (
        <footer className="footer">
            <div className='footer__links-container'>
                <h3 className='footer__links-title'>Our restaurants</h3>
                <a className='footer__link' href='https://www.google.com/maps' target="_blank" rel="noreferrer">Bian Dang</a>
                <a className='footer__link' href='https://www.google.com/maps' target="_blank" rel="noreferrer">A Burgers</a>
                <a className='footer__link' href='https://www.google.com/maps' target="_blank" rel="noreferrer">Mission Saigon</a>
                <a className='footer__link' href='https://www.google.com/maps' target="_blank" rel="noreferrer">Out Fry</a>
                <a className='footer__link' href='https://www.google.com/maps' target="_blank" rel="noreferrer">Stacksando</a>
            </div>
            <div className='footer__links-container'>
                <h3 className='footer__links-title'>Find us</h3>

                <div className='footer__mini-container'>
                    <p className='footer__text'>Address</p>
                    <p className='footer__text'>Sorry, we’re just a digital food court</p>
                </div>
                <div className='footer__mini-container'>
                    <p className='footer__text'>Order on</p>
                    <a className='footer__link' href='https://play.google.com/store/' target="_blank" rel="noreferrer">Download on Android</a>
                    <a className='footer__link' href='https://www.apple.com/app-store/' target="_blank" rel="noreferrer">Download on iOS</a>
                </div>
            </div>
            <div className='footer__links-container'>
                <h3 className='footer__links-title' id="contact">Corporate</h3>
                <a className='footer__link' href={url1} target="_blank" rel="noreferrer">Contact</a>
                <a className='footer__link' href={url2} target="_blank" rel="noreferrer">Our Story</a>
                <a className='footer__link' href={url1} target="_blank" rel="noreferrer">Jobs</a>
                <a className='footer__link' href={url2} target="_blank" rel="noreferrer">Support</a>
            </div>
            <div className='footer__links-container'>
                <h3 className='footer__links-title'>Socials</h3>
                <a className='footer__link' href='https://www.instagram.com/' target="_blank" rel="noreferrer">Instagram</a>
                <a className='footer__link' href='https://www.facebook.com/' target="_blank" rel="noreferrer">Facebook</a>
            </div>
        </footer>
    )
}


export default Footer;