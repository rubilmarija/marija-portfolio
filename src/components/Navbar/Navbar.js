import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { FaCat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_container bounce-in-top'>
                    <div className='navbar-links_logo'>
                        <Link activeClass="active" to={'/'} spy={true} smooth={true}>M</Link></div>
                    <div className='link'><Link to={'about'} spy={true} smooth={true}>About me</Link></div>
                    {/* <div className='link'><Link to='experience' spy={true} smooth={true}>Experience</Link></div> */}
                    <div className='link'><Link to={'skills'} spy={true} smooth={true}>Skills</Link></div>
                    <div className='link'><Link to={'projects'} spy={true} smooth={true}>Projects</Link></div>
                    {/* <div className='link'><Link to='footer' spy={true} smooth={true}>Let's connect</Link></div> */}
                </div>
            </div>
            <div className='navbar-sign'>
                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <button><a href="mailto: marija.rubil@hyperisland.se">Let's Connect</a></button>
                </button>


            </div>
            <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={40} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={40} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <div className='navbar-links_logo'><Link to={'/'} spy={true} smooth={true}>M</Link></div>
                            <div className='side-link'><Link to={'about'} spy={true} smooth={true}>About me</Link></div>
                            {/* <div className='side-link'><Link to='experience' spy={true} smooth={true}>Experience</Link></div> */}
                            <div className='side-link'><Link to={'skills'} spy={true} smooth={true}>Skills</Link></div>
                            <div className='side-link'><Link to={'projects'} spy={true} smooth={true}>Projects</Link></div>
                            {/* <div className='side-link'><Link to='footer' spy={true} smooth={true}>Let's connect</Link></div> */}
                            <div className='navbar-menu_container-links-sign'>
                                <button type='button'><a href="mailto: marija.rubil@hyperisland.se">Contact me</a></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;