import React from 'react';
import '../styles/header.css';
import Ball from '../image-ekstraklasa/ball.png';

const Header = () => {
    return ( 
        <>
            <header className='col-12'>
                <p>Soccer Slide</p>
                <img src={Ball} alt='ball' />
            </header>
        </>
     );
}
 
export default Header;