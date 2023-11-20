import React from 'react';
import "./Main.css";
import Header from '../Header/Header';
import Depiction from '../Depiction/Depiction';
import Stats from '../Stats/Stats';
import Footer from '../Footer/Footer';


function Main() {


    return (
        <section className='main'>
            <Header />
            <Depiction />
            <Stats />
            <Footer />
        </section>
    )
}


export default Main;