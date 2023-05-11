// import React, { useState } from 'react';
import './About.css';
//import useCollapse from 'react-collapsed';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";


const About = () => {
    // const [isExpanded, setExpanded] = useState(false);
    // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className='aboutMe section__margin' id='experience'>

            <div className='aboutMe-heading'>
                <h1 className='gradient__text'
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="50"
                    data-aos-duration="400">Get to know me better</h1>
            </div>

            <div className='aboutMe-feature'
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-delay="50"
                data-aos-duration="900">

                <p>As a proactive and organized individual with a background in administration and public procurement, I have a keen eye for detail and capable to administer numerous tasks to meet tight deadlines without compromising quality.</p>
                <p>
                    My empathetic nature and desire to connect with others has led me to pursue a career in frontend development, where I can utilize my communication skills to effectively collaborate with a team and create user-friendly interfaces that improve people's lives.</p>
                <p>
                    As I am to embark on my career in frontend development, I am eager to absorb knowledge and learn new skills from industry leaders and professionals. With my proactive attitude, I am poised to make a positive impact in the field.
                </p>
            </div>

            <div className='expand-section__about-me'>
                {/* <button
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </button> */}
                {/* <section {...getCollapseProps()}> */}

            </div>

        </div>
    )
}

export default About;