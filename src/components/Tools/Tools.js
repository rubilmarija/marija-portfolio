import React from 'react';
import './Tools.css';
import { FaFigma, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandVscode, TbBrandBootstrap, TbBrandTailwind } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { SiExpress, SiPostgresql, SiMongodb } from "react-icons/si";

const Tools = () => {
    return (
        <div
            className='tools-container section__margin'
            id='skills'
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-delay="50"
            data-aos-duration="400"
        >
            <div className='tools-heading' >
                <h1 className='gradient__text'>Skills</h1>
            </div>
            <div className='aboutMe-feature'>
                <p>Programming languages, libraries and tools that I am using in my projects, as well as collaboration projects</p>
            </div>

            <div className='icons'>
                <div className='icon'> <AiOutlineHtml5 /></div>
                <div className='icon'> <TbBrandCss3 /></div>
                <div className='icon'> <DiJavascript1 /></div>
                <div className='icon'> <RiReactjsFill /></div>
                <div className='icon'> <FaNodeJs /></div>
                <div className='icon'> <TbBrandVscode /></div>
                <div className='icon'> <BsGit /></div>
                <div className='icon'> <SiExpress /></div>
                <div className='icon'> <SiPostgresql /></div>
                <div className='icon'> <SiMongodb /></div>
                <div className='icon'> <TbBrandBootstrap /></div>
                <div className='icon'> <TbBrandTailwind /></div>
                <div className='icon'> <FaFigma /></div>
            </div>
        </div>
    )
}

export default Tools;