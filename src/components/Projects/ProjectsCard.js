import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ title, image, description, github, site }) => {
    return (

        <div class="card">
            <img src={image} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className='btn-source'>Source code</button>
                <button className='btn-site'>View site</button>
            </div>
        </div>

    )
}

export default ProjectsCard;