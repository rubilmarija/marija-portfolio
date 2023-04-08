import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import useCollapse from 'react-collapsed';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";


const About = () => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className='aboutMe section__margin' id='aboutMe'>

            <div className='aboutMe-heading'>
                <h1 className='gradient__text'>About me</h1>
            </div>

            {/* <div className='aboutMe-feature'>

            </div> */}

            <div className='expand-section__about-me'>
                <button
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <section {...getCollapseProps()}>

                    <div className='experience'>
                        <div>
                            <p>

                            </p>
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className='timeline-el__education'
                                iconStyle={{ background: '#11324d', color: '#fff' }}
                                icon={<FaGraduationCap />}
                                date='2022 - present'
                            >
                                <h3>Hyper Island, Stockholm</h3>
                                <h4>Frontend Developer</h4>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className='timeline-el__work'
                                iconStyle={{ background: '#11324d', color: '#fff' }}
                                icon={<MdWorkHistory />}
                                date='2018 - 2020'
                            >
                                <h3>Hemfrid AB, Stockholm</h3>
                                <h4>Housekeeper</h4>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className='timeline-el__work'
                                iconStyle={{ background: '#11324d', color: '#fff' }}
                                icon={<MdWorkHistory />}
                                date='2015 - 2016'
                            >
                                <h3>Public Procurement Officer</h3>
                                <h4>City of Zagreb, Croatia</h4>
                                <h5>Apprenticeship</h5>
                                <p>Documentation officer in the public procurement procedures</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className='timeline-el__work'
                                iconStyle={{ background: '#11324d', color: '#fff' }}
                                icon={<BsPersonFillGear />}
                                date='2014 - 2015'
                            >
                                <h3>Administrative Assistant</h3>
                                <h4>Slavonski Brod, Croatia</h4>
                                <h5>FINA (Financial Agency) · Internship</h5>
                                <h5>FESTUNG (Insurance agency) · Internship</h5>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className='timeline-el__education'
                                iconStyle={{ background: '#11324d', color: '#fff' }}
                                icon={<FaGraduationCap />}
                                date='2011 - 2015'
                            >
                                <h3>University of Slavonski Brod, Croatia</h3>
                                <h4>Bachelor's degree, Economics</h4>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About;