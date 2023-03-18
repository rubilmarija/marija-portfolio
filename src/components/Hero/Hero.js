import React from 'react';
import './Hero.css';
import blob from '../../assets/marija.png'

const Hero = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'>Hi, I'm Marija</h1>
                <p>Front End Developer</p>
                <p>Welcome to my website!</p>
            </div>
            <div className='header-image'>
                <img src={blob} alt="blob" />
            </div>
        </div>
    )
}

export default Hero;