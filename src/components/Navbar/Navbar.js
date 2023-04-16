import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaCat } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div class="custom-shape-divider-top-1679127327">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='navbar-links'>
                <div className='navbar-links_container bounce-in-top'>
                    <div className='navbar-links_logo'><Link activeClass="active" to="home" spy={true} smooth={true}><FaCat /></Link></div>
                    <div className='link'><Link to="aboutMe" spy={true} smooth={true}>About me</Link></div>
                    <div className='link'><Link to='experience' spy={true} smooth={true}>Experience</Link></div>
                    <div className='link'><Link to='projects' spy={true} smooth={true}>Projects</Link></div>
                    <div className='link'><Link to='skills' spy={true} smooth={true}>Skills</Link></div>
                    <div className='link'><Link to='footer' spy={true} smooth={true}>Let's connect</Link></div>
                </div>
            </div>
            <div className='navbar-sign'>
                <button type='button'> <a href="mailto: marija.rubil@hyperisland.se">Contact me</a> </button>
            </div>
            <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={40} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={40} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <div className='navbar-links_logo'><FaCat /></div>
                            <div className='side-link'><Link to="aboutMe" spy={true} smooth={true}>About me</Link></div>
                            <div className='side-link'><Link to='experience' spy={true} smooth={true}>Experience</Link></div>
                            <div className='side-link'><Link to='projects' spy={true} smooth={true}>Projects</Link></div>
                            <div className='side-link'><Link to='skills' spy={true} smooth={true}>Skills</Link></div>
                            <div className='side-link'><Link to='footer' spy={true} smooth={true}>Let's connect</Link></div>
                            <div className='navbar-menu_container-links-sign'>
                                <button type='button'><a href="mailto: marija.rubil@hyperisland.se">Contact me</a></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Navbar;