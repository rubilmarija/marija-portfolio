import React from 'react';
import ProjectsCard from './ProjectsCard';
import './Projects.css';
import portfolio from '../../assets/portfolio.json'

const Projects = () => {
    return (
        <div className='projects-container section__margin'>
            <div className='projects-heading'>
                <h1 className='gradient__text'>Projects</h1>
            </div>
            <div className='cards-container'>
                <ProjectsCard src={portfolio[0].image} title={portfolio[0].title} decription={portfolio[0].description} />
                <ProjectsCard src={portfolio[1].image} title={portfolio[1].title} decription={portfolio[1].description} />
                <ProjectsCard src={portfolio[2].image} title={portfolio[2].title} decription={portfolio[2].description} />
                <ProjectsCard src={portfolio[3].image} title={portfolio[3].title} decription={portfolio[3].description} />
            </div>
        </div>
    )
}

export default Projects;