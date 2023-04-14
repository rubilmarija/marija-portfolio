import React, { useRef } from 'react';
import ProjectsCard from './ProjectsCard';
import './Projects.css';
import portfolio from '../../assets/portfolio.json';
// import collaborations from '../../assets/collaborations.json';

const Projects = () => {
    return (
        <div className='projects-container section__margin'>
            <div className='projects-heading'>
                <h1 className='gradient__text'>Projects</h1>
            </div>
            <div>

            </div>
            <div className='cards-container'>
                {portfolio.map((product, index) => {
                    return (
                        <ProjectsCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            github={product.github}
                            site={product.site}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Projects;