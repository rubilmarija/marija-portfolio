import React from 'react';
import AboutMe from '../components/About/AboutMe'

const downloadCV = () => {
    fetch('Marija_Rubil_CV.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);

            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Marija_Rubil_CV.pdf';
            alink.click();
        })
    })
}

const About = () => {
    return (
        <>
            <AboutMe />

            <button className='cv-btn' onClick={downloadCV}>Download my CV</button>
        </>
    )
}

export default About