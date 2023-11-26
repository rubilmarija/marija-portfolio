import React from 'react';
import ProjectsCard from './ProjectsCard';
import './Projects.css';
import portfolio from '../../assets/portfolio.json';
// import collaborations from '../../assets/collaborations.json';
import { TbBrandGithub } from 'react-icons/tb';


const Projects = () => {
    return (
        <div className='projects-container section__margin' id='projects'>
            <div className='projects-heading'>
                <h1 className='gradient__text'
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="50"
                    data-aos-duration="400">Projects</h1>
                <p
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-delay="50"
                    data-aos-duration="900"> Here I have displayed some of my projects as well as project that I worked on with my classmates
                </p>
                <div className='git-container'>
                    <p>Check out more projects on my GitHub</p>
                    <div className='git'>
                        <a href="https://github.com/rubilmarija" target='_blank' ><TbBrandGithub /></a>
                    </div>
                </div>

            </div>
            <div>
            </div>
            <div className='cards-container' >
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