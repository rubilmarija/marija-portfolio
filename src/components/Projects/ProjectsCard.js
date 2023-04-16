import React from 'react';
import './ProjectsCard.css';
import { BiCodeAlt } from 'react-icons/bi';
import { BsPlayBtn } from 'react-icons/bs';

const ProjectsCard = ({ title, image, description, github, site }) => {
    return (
        <div
            class="card"
            data-aos="flip-left"
            data-aos-easing="ease-in"
            data-aos-delay="50"
            data-aos-duration="400"
        >
            <img src={image} alt='img' />
            <div className='card-info'>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={github} className='btn-source'><BiCodeAlt /></a>
                <a href={site} className='btn-site' > <BsPlayBtn /> </a>
            </div>
        </div >
    )
}

export default ProjectsCard;