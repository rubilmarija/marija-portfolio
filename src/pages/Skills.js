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
        <div className='skills'>
            <div className='title-container'>
                <h1 className='title'
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="50"
                    data-aos-duration="400">Skills</h1>
            </div>
            <div className='skills-content'
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-delay="50"
                data-aos-duration="900">
                <p>
                    Currently I am a Frontend Developer student at Hyper Island.
                </p>
                <p>
                    Through my education at Hyper Island I have gained valuable new skills and further developed ones that I have achieved along my previous education in economics and previous working experience.
                </p>
            </div>
            <div className='skills-carousel'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval="4000"
                    infinite={true}
                    responsive={responsive}
                    mouseTracking={true}
                    paddingLeft={50}

                >
                    {/* <div>
                        <img src={programmer} className="sliderimg" />
                        <p>Web Development</p>
                    </div> */}
                    <div>
                        <img src={webdevelopment} className="sliderimg" />
                        <p>Web Development</p>
                    </div>
                    <div>
                        <img src={jshtmlcss} className="sliderimg" />
                        <p>JavaScript HTML CSS</p>
                    </div>
                    <div>
                        <img src={react} className="sliderimg" />
                        <p>React</p>
                    </div>
                    <div>
                        <img src={versioncontrol} className="sliderimg" />
                        <p>Version Control</p>
                    </div>
                    <div>
                        <img src={pairprogramming1} className="sliderimg" />
                        <p>Pair Programming</p>
                    </div>
                    <div>
                        <img src={webdev} className="sliderimg" />
                        <p>Responsive Web Design</p>
                    </div>
                    <div>
                        <img src={designing} className="sliderimg" />
                        <p>Figma</p>
                    </div>
                    <div>
                        <img src={ideation} className="sliderimg" />
                        <p>Ideation</p>
                    </div>
                    <div>
                        <img src={designsprint} className="sliderimg" />
                        <p>Design Sprint</p>
                    </div>
                    <div>
                        <img src={userflow} className="sliderimg" />
                        <p>User Flow</p>
                    </div>
                    <div>
                        <img src={prototyping} className="sliderimg" />
                        <p>Prototyping Process</p>
                    </div>
                    <div>
                        <img src={wireframing} className="sliderimg" />
                        <p>Wireframing</p>
                    </div>
                    <div>
                        <img src={team} className="sliderimg" />
                        <p>Teamwork</p>
                    </div>
                    <div>
                        <img src={teamwork} className="sliderimg" />
                        <p>Agile Project Management</p>
                    </div>
                    {/* <div>
                        <img src={pairprogramming} className="sliderimg" />
                        <p>Pair Programming</p>
                    </div> */}

                    <div>
                        <img src={scrum} className="sliderimg" />
                        <p>Scrum Methodology</p>
                    </div>
                    <div>
                        <img src={timemngmt} className="sliderimg" />
                        <p>Time Management</p>
                    </div>

                </AliceCarousel>
            </div>
        </div>
    )
}

export default Skills