import React from 'react';
import "./Main.css";
import Header from '../Header/Header';
import Depiction from '../Depiction/Depiction';
import Stats from '../Stats/Stats';


function Main() {


    return (
        <section className='main'>
            <Header />
            <Depiction />
            <Stats />
        </section>
    )
}


export default Main;