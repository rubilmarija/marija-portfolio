import React from 'react';
import './ProjectsCard.css';
import { BiCodeAlt } from 'react-icons/bi';
import { BsPlayBtn } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg'

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
                <a href="#" className='btn-source'><CgFileDocument /></a>
                <a href={github} className='btn-source' target='_blank'><BiCodeAlt /></a>
                <a href={site} className='btn-site' target='_blank' > <BsPlayBtn /> </a>
            </div>
        </div >
    )
}

export default ProjectsCard;