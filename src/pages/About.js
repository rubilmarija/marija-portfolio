import React from 'react';
import AboutMe from '../components/About/AboutMe'

import myCV from '../assets/Marija_Rubil_CV.pdf';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <AboutMe />

            <Link
                to={myCV}
                download='Marija_Rubil_CV.pdf'
                target='_blank'
                rel="noreferrer">
                <button className='cv-btn' >Download my CV</button>
            </Link>
        </>
    )
}

export default About