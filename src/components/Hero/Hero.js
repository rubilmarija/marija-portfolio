import React from 'react';
import './Hero.css';
import blob from '../../assets/marija.png'

const Hero = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1
                    className='gradient__text'
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="50"
                    data-aos-duration="400"
                >
                    Hi, I'm Marija
                </h1>
                <div className='header-image' >
                    <img
                        src={blob}
                        alt="blob"
                        data-aos="fade-left"
                        data-aos-easing="ease-in"
                        data-aos-delay="50"
                        data-aos-duration="900"
                    />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="50"
                    data-aos-duration="900"
                >
                    <p>Frontend Developer</p>
                    <p>Welcome to my website!</p>
                    <p>As a proactive and organized individual with a background in administration and public procurement, I have a keen eye for detail and capable to administer numerous tasks to meet tight deadlines without compromising quality.</p>
                    <p>
                        My empathetic nature and desire to connect with others has led me to pursue a career in frontend development, where I can utilize my communication skills to effectively collaborate with a team and create user-friendly interfaces that improve people's lives.</p>
                    <p>
                        As I am to embark on my career in frontend development, I am eager to absorb knowledge and learn new skills from industry leaders and professionals. With my proactive attitude, I am poised to make a positive impact in the field.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hero;