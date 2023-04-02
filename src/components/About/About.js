import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useCollapse from 'react-collapsed';

const About = () => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className='aboutMe section__margin' id='aboutMe'>

            <div className='aboutMe-heading'>
                <h1 className='gradient__text'>About me</h1>
            </div>

            <div className='aboutMe-feature'>
                <p>I am Frontend Developer.</p>
            </div>

            <div className='expand-section__about-me'>
                <button
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <section {...getCollapseProps()}>
                    <div>CV</div>
                    <div><p>bal bla bla bla</p></div>
                </section>
            </div>

        </div>
    )
}

export default About;