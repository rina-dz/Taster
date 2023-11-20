import React from 'react';
import "./Depiction.css";
import depictionIcon from '../../images/about__img.png';
import depictionImg from '../../images/food_img.png';


function Depiction() {


    return (
        <section className="depiction" id='about-us'>
            <div className="depiction__partnership">
                <p className="depiction__partnership-text">Restaurateur? Join the Taster Platform and rapidly launch one of our
                    iconic virtual restaurant brands from your existing kitchen!</p>
                <div className="depiction__buttons-container">
                    <a href="https://manna-board.ru/storage/files/ru/12611/04a026d3729aa0e4b667f514cae2650c.jpg" target="_blank" rel="noreferrer">
                        <button className="depiction__button">Become a partner</button>
                    </a>
                    <a href="https://fikiwiki.com/uploads/posts/2022-02/1645042296_3-fikiwiki-com-p-kartinki-ishchu-rabotu-4.jpg" target="_blank" rel="noreferrer">
                        <button className="depiction__button">Learn more</button>
                    </a>
                </div>
            </div>
            <div className="depiction__border">
                <div className="depiction__container">
                    <h3 className="depiction__title">The best of street food at home</h3>
                    <div className="depiction__text-container">
                        <p className="depiction__text">Taster is a collection of online restaurants dedicated to bringing the best of street food to you.</p>
                    </div>
                    <a href="https://thumbs.dreamstime.com/z/cat-gray-looking-job-gray-cat-yellow-helmet-wears-poster-says-looking-job-white-background-isolated-210927047.jpg" target="_blank" rel="noreferrer">
                        <button className="depiction__discover-button">Discover our brands</button>
                    </a>
                </div>
                <img className="depiction__icon" src={depictionIcon} alt='Food icon' />
            </div>
            <img className='depiction__img' src={depictionImg} alt='Food img' />
        </section>
    )
}


export default Depiction;