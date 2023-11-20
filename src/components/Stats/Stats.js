import React from 'react';
import "./Stats.css";
import stat_1 from '../../images/stats__img-1.png';
import stat_2 from '../../images/stats__img-2.png';
import stat_3 from '../../images/stats__img-3.png';
import stat_4 from '../../images/stats__img-4.png';
import stat_5 from '../../images/stats__img-5.png';
import stat_6 from '../../images/stats__img-6.png';


function Stats() {

    return (
        <section className="stats">
            <div className='stast__title-container' id="stats">
                <h2 className='stats__title'>Bitesize Stats</h2>
            </div>
            <ul className='stats__container'>
                <li className='stats__stat'>
                    <img className='stats__img' src={stat_1} alt='calendar' />
                    <p className='stats__text'>4</p>
                    <p className='stats__text'>Years</p>
                </li>
                <li className='stats__stat'>
                    <img className='stats__img' src={stat_2} alt='cheese' />
                    <p className='stats__text'>425,364</p>
                    <p className='stats__text'>Cheese Slices</p>
                </li>
                <li className='stats__stat'>
                    <img className='stats__img' src={stat_3} alt='potato fries' />
                    <p className='stats__text'>9.2 million</p>
                    <p className='stats__text'>Sweet Potato Fries</p>
                </li>
                <li className='stats__stat'>
                    <img className='stats__img' src={stat_4} alt='noodle' />
                    <p className='stats__text'>7,104 kms</p>
                    <p className='stats__text'>of Noodles</p>
                </li>
                <li className='stats__stat'>
                    <img className='stats__img' src={stat_5} alt='tiger prawns' />
                    <p className='stats__text'>314,530</p>
                    <p className='stats__text'>Tiger Prawns</p>
                </li>
                <li className='stats__stat'>
                    <img className='stats__img' src={stat_6} alt='ride' />
                    <p className='stats__text'>1,000,000+</p>
                    <p className='stats__text'>Rides</p>
                </li>
            </ul>
            <div className='stats__num-container'>
                <p className='stats__num'>100 Restaurants</p>
                <p className='stats__num'>25 Cities</p>
                <p className='stats__num'>5 Brands</p>
                <p className='stats__num'>And More!</p>
            </div>
        </section>
    )
}


export default Stats;