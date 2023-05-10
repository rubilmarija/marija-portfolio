import React from 'react';
import './Skills.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import programmer from '../assets/programmer.svg';
import designing from '../assets/designing.svg';
import designsprint from '../assets/designsprint.svg';
import ideation from '../assets/ideation.svg';
import jshtmlcss from '../assets/jshtmlcss.svg';
import pairprogramming from '../assets/pairprogramming.svg';
import pairprogramming1 from '../assets/pairprogramming1.svg';
import prototyping from '../assets/prototyping.svg';
import react from '../assets/react.svg';
import scrum from '../assets/scrum.svg';
import team from '../assets/team.svg';
import teamwork from '../assets/teamwork.svg';
import timemngmt from '../assets/timemanagement.svg';
import userflow from '../assets/userflow.svg';
import versioncontrol from '../assets/versioncontrol.svg';
import webdev from '../assets/webdev.svg';
import webdevelopment from '../assets/webdevelopment.svg';
import wireframing from '../assets/wireframing.svg';


const Skills = () => {

    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 4
        }
    };

    return (
        <div>
            <h1 className='gradient__text'></h1>
            <div className='skills-carousel'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval="4000"
                    infinite={true}
                    responsive={responsive}
                    mouseTracking={true}
                    paddingLeft={50}

                >
                    <img src={programmer} className="sliderimg" />
                    <img src={webdev} className="sliderimg" />
                    <img src={webdevelopment} className="sliderimg" />
                    <img src={jshtmlcss} className="sliderimg" />
                    <img src={react} className="sliderimg" />
                    <img src={designing} className="sliderimg" />
                    <img src={designsprint} className="sliderimg" />
                    <img src={ideation} className="sliderimg" />
                    <img src={pairprogramming} className="sliderimg" />
                    <img src={prototyping} className="sliderimg" />
                    <img src={scrum} className="sliderimg" />
                    <img src={team} className="sliderimg" />
                    <img src={pairprogramming1} className="sliderimg" />
                    <img src={teamwork} className="sliderimg" />
                    <img src={timemngmt} className="sliderimg" />
                    <img src={userflow} className="sliderimg" />
                    <img src={versioncontrol} className="sliderimg" />
                    <img src={wireframing} className="sliderimg" />
                </AliceCarousel>
            </div>
        </div>
    )
}

export default Skills